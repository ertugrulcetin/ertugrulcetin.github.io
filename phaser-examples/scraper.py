#!/usr/bin/env python3
"""
Phaser.js Examples Scraper (Structure Only)
------------------------------------------
Crawls the *entire* Phaser-3 (v3.85.0) examples site
(`https://phaser.io/examples/v3.85.0`) and saves the *structure* (categories,
subcategories, example names, and URLs) for all examples to a JSON file.

**This version does NOT extract the source code.**

Usage
~~~~~
    python phaser_examples_scraper.py               # produces phaser_examples_structure.json

If you wish to change the destination JSON path or request throttling, tweak
the constants at the top of this file.
"""
from __future__ import annotations

import json
import sys
import time
from collections import defaultdict
from pathlib import Path
from typing import Any, Dict, List, Set
from urllib.parse import urljoin, urlparse, urlunparse

import requests
from bs4 import BeautifulSoup, Tag

# ---------------------------------------------------------------------------
# Configuration
# ---------------------------------------------------------------------------

BASE_URL = "https://phaser.io/examples/v3.85.0"      # Updated: Root for ALL examples
EXAMPLES_ROOT = "/examples/v3.85.0/"                 # Updated: Root prefix for path parsing

HEADERS = {
    "User-Agent": (
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 12_7) "
        "AppleWebKit/537.36 (KHTML, like Gecko) "
        "Chrome/124.0 Safari/537.36"
    )
}
REQUEST_TIMEOUT = 15  # seconds
REQUEST_DELAY = 0.2   # polite delay between requests (seconds)
MAX_CRAWL_DEPTH = 10
OUTPUT = Path("phaser_examples_structure.json") # Updated output filename

# ---------------------------------------------------------------------------
# Global state (kept minimal)
# ---------------------------------------------------------------------------

visited: Set[str] = set()
session = requests.Session()
session.headers.update(HEADERS)

# ---------------------------------------------------------------------------
# Helper functions
# ---------------------------------------------------------------------------

def normalise_url(url: str) -> str:
    """Strip fragments, query strings, and trailing slashes for deduplication."""
    p = urlparse(url)
    return urlunparse((p.scheme, p.netloc, p.path.rstrip('/'), '', '', ''))

def get_soup(url: str) -> BeautifulSoup | None:
    """Download *url* and return a BeautifulSoup, or *None* on failure."""
    try:
        print(f"[GET] {url}")
        r = session.get(url, timeout=REQUEST_TIMEOUT)
        r.raise_for_status()
    except requests.RequestException as exc:
        print(f"[WARN] {exc}")
        return None
    finally:
        time.sleep(REQUEST_DELAY)
    return BeautifulSoup(r.text, "html.parser")

# ---------------------------------------------------------------------------
# Crawling
# ---------------------------------------------------------------------------

def crawl(url: str, depth: int = 0) -> List[Dict[str, str]]:
    """Recursively find example view pages."""
    if depth > MAX_CRAWL_DEPTH:
        print(f"[WARN] Max crawl depth ({MAX_CRAWL_DEPTH}) reached at {url}")
        return []

    norm_url = normalise_url(url)
    if norm_url in visited:
        return []
    visited.add(norm_url)

    soup = get_soup(url)
    if soup is None:
        return []

    base_url_for_example = norm_url

    if "/view/" in base_url_for_example:
        slug = base_url_for_example.rsplit("/", 1)[-1]
        return [{
            "name": slug.replace("-", " ").title(),
            "url": base_url_for_example,
            "fullUrl": base_url_for_example,
            "slug": slug,
        }]

    results: List[Dict[str, str]] = []

    for a in soup.select("a[href*='/examples-show/']"):
        href = urljoin(url, a["href"])
        results.extend(_process_examples_show(href))

    # Follow in-scope links (must stay under BASE_URL)
    # Make sure we only follow links starting with the *normalized* base URL
    # This prevents issues if the initial BASE_URL had a trailing slash
    normalized_base = normalise_url(BASE_URL)
    for a in soup.select("a[href]"):
        href = a["href"]
        if not href or href.startswith("#") or href.startswith("javascript:"):
            continue

        full = urljoin(url, href)
        norm = normalise_url(full)

        if not norm.startswith(normalized_base):
            continue

        if norm in visited:
            continue

        if "/view/" in norm:
            slug = norm.rsplit("/", 1)[-1]
            # Extract name from link text if available, otherwise use slug
            link_text = a.get_text(strip=True)
            example_name = link_text if link_text else slug.replace("-", " ").title()
            results.append({
                "name": example_name,
                "url": norm,
                "fullUrl": norm,
                "slug": slug,
            })
            visited.add(norm)
        # Avoid crawling the root examples page itself again if linked
        elif norm != normalized_base: 
            results.extend(crawl(full, depth + 1))

    return results

def _process_examples_show(url: str) -> List[Dict[str, str]]:
    """Follow examples-show wrappers to find the real view URL."""
    norm_url = normalise_url(url)
    if norm_url in visited:
        return []
    # Don't mark the examples-show URL itself as fully visited yet,
    # as we might need to crawl its content if no direct view link is found.
    
    soup = get_soup(url)
    if soup is None:
        return []

    # Try to get the example name from the page title or h1 if possible
    page_title = soup.title.string if soup.title else None
    h1_text = soup.h1.string if soup.h1 else None
    default_name = url.split("/")[-1].replace("-"," ").title() 
    example_name = h1_text or page_title or default_name

    iframe: Tag | None = soup.select_one("iframe.exampleframe")
    if iframe and "src" in iframe.attrs:
        iframe_src = iframe["src"]
        if "/view/" in iframe_src:
            view = normalise_url(urljoin(url, iframe_src))
            if view not in visited:
                slug = view.rsplit("/", 1)[-1]
                visited.add(view) # Mark the actual view page as visited
                visited.add(norm_url) # Also mark the show page as visited now
                return [{
                    "name": example_name, # Use name derived from show page
                    "url": view,
                    "fullUrl": view,
                    "slug": slug
                }]

    link = soup.select_one("a[href*='/view/']")
    if link:
        view = normalise_url(urljoin(url, link["href"]))
        if view not in visited:
            slug = view.rsplit("/", 1)[-1]
            visited.add(view)
            visited.add(norm_url) # Mark the show page as visited
            return [{
                "name": example_name, # Use name derived from show page
                "url": view,
                "fullUrl": view,
                "slug": slug
            }]

    print(f"[WARN] Could not find view URL within examples-show: {url}")
    visited.add(norm_url) # Mark as visited even if we failed
    return []

# ---------------------------------------------------------------------------
# Hierarchy building
# ---------------------------------------------------------------------------

def organise(examples: List[Dict[str, str]]) -> List[Dict[str, Any]]:
    """Organize the flat list of examples into categories/subcategories."""
    cats: Dict[str, Dict[str, Any]] = defaultdict(lambda: {"subcategories": defaultdict(list)})

    for ex in examples:
        if EXAMPLES_ROOT not in ex["url"]:
            print(f"[WARN] Example URL {ex['url']} does not contain root {EXAMPLES_ROOT}")
            continue
        
        # Split path relative to the examples root
        rel_path = ex["url"].split(EXAMPLES_ROOT, 1)[1]
        parts = rel_path.split("/")

        # Determine category and subcategory based on path structure
        if len(parts) >= 3 and parts[-2] == 'view': 
            # Structure: category/subcategory/view/example-slug
            category = parts[0].replace("-", " ").title()
            subcategory = parts[1].replace("-", " ").title()
            cats[category]["subcategories"][subcategory].append(ex)
        elif len(parts) == 2 and parts[-1] == 'view':
             # Structure: category/view (example slug might be missing in path)
            category = parts[0].replace("-", " ").title()
            subcategory = "Examples" # Default subcategory name
            print(f"[INFO] Assigning to default subcategory 'Examples' for: {ex['url']}")
            cats[category]["subcategories"][subcategory].append(ex)
        elif len(parts) >= 2 and parts[-2] != 'view' and parts[-1] != 'view':
             # Fallback? Maybe category/example-slug if view is implicit?
             # Let's assume the first part is category, rest implies example in default subcat
             category = parts[0].replace("-", " ").title()
             subcategory = "Examples" # Default subcategory name
             print(f"[INFO] Assuming default subcategory for structure: {ex['url']}")
             cats[category]["subcategories"][subcategory].append(ex)
        else:
            print(f"[WARN] Skipping example with unhandled path structure: {ex['url']}")


    result: List[Dict[str, Any]] = []
    for cat_name, cat_data in sorted(cats.items()):
        subcats = [
            {"name": sname, "examples": exs}
            for sname, exs in sorted(cat_data["subcategories"].items())
        ]
        if subcats:
             result.append({"name": cat_name, "subcategories": subcats})
    return result

# ---------------------------------------------------------------------------
# Main entry point
# ---------------------------------------------------------------------------

def main() -> None:
    print("[INFO] Crawling ALL examples structure…")
    flat = crawl(BASE_URL)
    print(f"[INFO] Found {len(flat)} unique example view pages")

    categories = organise(flat)
    print(f"[INFO] Organized into {len(categories)} categories")

    print(f"[INFO] Writing structure to {OUTPUT}")
    OUTPUT.write_text(json.dumps({"categories": categories}, indent=2), encoding="utf-8")
    print(f"[DONE] {OUTPUT} created")

if __name__ == "__main__":
    try:
        main()
    except KeyboardInterrupt:
        sys.exit("[ABORTED] Interrupted by user")
