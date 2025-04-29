# Phaser Examples Viewer

A web application that displays and runs Phaser.js examples in a structured, organized way.

## Features

- Browse examples by category and subcategory
- View example code
- Run examples directly in the browser
- Link to original examples on the Phaser website

## Setup Instructions

### 1. Prerequisites

- Python 3.6 or higher (for scraping examples)
- Modern web browser
- Internet connection

### 2. Install Dependencies

Install Python dependencies for the scraper:

```bash
pip install -r requirements.txt
```

### 3. Scrape Examples

Run the scraper to fetch the examples from the Phaser website:

```bash
python scraper.py
```

This will create a `phaser_examples.json` file containing all the examples data.

### 4. Run the Web App

You can serve the web app using any static file server. For example, using Python:

```bash
# Python 3
python -m http.server

# Python 2
python -m SimpleHTTPServer
```

Then open your browser and navigate to:

```
http://localhost:8000
```

## Usage

- Browse examples using the sidebar on the left
- Click on an example to load and run it in the main area
- View the example code below the game canvas
- Click "View Original" to see the example on the Phaser website

## Notes

- The scraper is respectful of the Phaser website and includes a delay between requests
- Some examples may not work perfectly due to the complexity of the code or missing assets
- This viewer is for educational purposes only 