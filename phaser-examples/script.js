console.log("script.js loaded"); // Add log at the very top

const categoriesContainer = document.getElementById('categories');
const exampleTitle = document.getElementById('example-title');
const originalLink = document.getElementById('original-link');
const gameContainer = document.getElementById('game-container');
const expandAllBtn = document.getElementById('expand-all-btn');
const collapseAllBtn = document.getElementById('collapse-all-btn');
const searchInput = document.getElementById('search-input'); // Get search input

let currentExample = null;
// Store structured data for filtering
let allCategoriesData = []; 

// Fetch examples structure data
async function fetchExamples() {
    try {
        const response = await fetch('phaser_examples_structure.json'); 
        if (!response.ok) {
            throw new Error('Failed to load examples structure data');
        }
        const data = await response.json();
        // Store the raw data for filtering
        allCategoriesData = data.categories || []; 
        return allCategoriesData; // Return the categories array
    } catch (error) {
        console.error('Error loading examples structure:', error);
        categoriesContainer.innerHTML = `<div class="error">Failed to load examples. ${error.message}</div>`;
        return [];
    }
}

// Toggle collapse state for an element
function toggleCollapse(element) {
    element.classList.toggle('collapsed');
}

// Set collapse state for an element
function setCollapseState(element, isCollapsed) {
    if (isCollapsed) {
        element.classList.add('collapsed');
    } else {
        element.classList.remove('collapsed');
    }
}

// Populate sidebar with categories and examples
function populateSidebar(categories) {
    categoriesContainer.innerHTML = '';

    if (!categories || categories.length === 0) {
        categoriesContainer.innerHTML = '<div>No examples found.</div>';
        return;
    }

    categories.forEach(category => {
        // Keep track if any child matches the search
        let categoryMatches = false; 
        const categoryElement = document.createElement('div');
        categoryElement.className = 'category'; 
        // Store data reference for filtering
        categoryElement.dataset.categoryName = category.name.toLowerCase(); 
        categoryElement.classList.add('collapsed'); // Collapse by default

        const categoryHeader = document.createElement('div');
        categoryHeader.className = 'category-header';
        categoryHeader.textContent = category.name;
        categoryHeader.addEventListener('click', () => toggleCollapse(categoryElement));
        categoryElement.appendChild(categoryHeader);

        if (!category.subcategories || category.subcategories.length === 0) {
             // Hide category if it has no subcategories (and thus no examples)
             categoryElement.classList.add('hidden');
             categoriesContainer.appendChild(categoryElement); // Still append to keep structure
            return; 
        }

        const liftedExamplesContainer = document.createDocumentFragment(); // Use a fragment for efficiency
        let hasLiftedExamples = false;

        category.subcategories.forEach(subcategory => {
            // Check if the subcategory is 'View'
            if (subcategory.name.toLowerCase() === 'view') {
                // If it's 'View', prepare its examples to be added later
                if (subcategory.examples && subcategory.examples.length > 0) {
                    hasLiftedExamples = true;
                    subcategory.examples.forEach(example => {
                        let exampleMatches = false;
                        const exampleItem = document.createElement('div');
                        exampleItem.className = 'example-item example-item-lifted';
                        exampleItem.textContent = example.name;
                        exampleItem.dataset.exampleName = example.name.toLowerCase();
                        exampleItem.addEventListener('click', () => loadExample(example));

                        if (filterItem(exampleItem)) {
                            exampleMatches = true;
                            categoryMatches = true;
                        } else {
                            exampleItem.classList.add('hidden');
                        }
                        liftedExamplesContainer.appendChild(exampleItem); // Add to fragment
                    });
                }
            } else {
                // If it's not 'View', process as a normal subcategory
                let subcategoryMatches = false;
                const subcategoryElement = document.createElement('div');
                subcategoryElement.className = 'subcategory';
                subcategoryElement.dataset.subcategoryName = subcategory.name.toLowerCase();
                subcategoryElement.classList.add('collapsed'); // Collapse by default

                const subcategoryHeader = document.createElement('div');
                subcategoryHeader.className = 'subcategory-header';
                subcategoryHeader.textContent = subcategory.name;
                subcategoryHeader.addEventListener('click', () => toggleCollapse(subcategoryElement));
                subcategoryElement.appendChild(subcategoryHeader);

                const exampleList = document.createElement('div');
                exampleList.className = 'example-list';

                if (!subcategory.examples || subcategory.examples.length === 0) {
                    subcategoryElement.classList.add('hidden'); // Hide if no examples
                    categoryElement.appendChild(subcategoryElement);
                    return; // Skip to next subcategory
                }

                subcategory.examples.forEach(example => {
                    let exampleMatches = false;
                    const exampleItem = document.createElement('div');
                    exampleItem.className = 'example-item';
                    exampleItem.textContent = example.name;
                    exampleItem.dataset.exampleName = example.name.toLowerCase();
                    exampleItem.addEventListener('click', () => loadExample(example));

                    // Check if this example matches the current search
                    if (filterItem(exampleItem)) {
                        exampleMatches = true;
                        subcategoryMatches = true;
                        categoryMatches = true;
                    } else {
                        exampleItem.classList.add('hidden');
                    }

                    exampleList.appendChild(exampleItem);
                });

                subcategoryElement.appendChild(exampleList);
                // Hide subcategory if none of its examples matched
                if (!subcategoryMatches) {
                    subcategoryElement.classList.add('hidden');
                }
                categoryElement.appendChild(subcategoryElement); // Append the subcategory element
            }
        });
        
        // Append lifted examples after all subcategories have been processed
        if (hasLiftedExamples) {
            categoryElement.appendChild(liftedExamplesContainer);
        }

        // Hide category if none of its subcategories or direct examples matched
        if (!categoryMatches) {
            categoryElement.classList.add('hidden');
        }
        categoriesContainer.appendChild(categoryElement);
    });
}

// Filter items based on search input
function filterItem(element, searchTerm = searchInput.value.toLowerCase()) {
    if (!searchTerm) return true; // Show if search is empty

    const categoryName = element.dataset.categoryName || '';
    const subcategoryName = element.dataset.subcategoryName || '';
    const exampleName = element.dataset.exampleName || '';

    return categoryName.includes(searchTerm) || 
           subcategoryName.includes(searchTerm) || 
           exampleName.includes(searchTerm);
}

// Function to handle search filtering
function handleSearch() {
    const searchTerm = searchInput.value.toLowerCase();
    const allCategories = categoriesContainer.querySelectorAll('.category');
    
    allCategories.forEach(categoryElement => {
        let categoryVisible = false;
        const categoryName = categoryElement.dataset.categoryName || '';
        const categoryHeader = categoryElement.querySelector('.category-header');
        const categoryMatches = categoryName.includes(searchTerm);

        const subcategories = categoryElement.querySelectorAll('.subcategory');
        subcategories.forEach(subcategoryElement => {
            let subcategoryVisible = false;
            const subcategoryName = subcategoryElement.dataset.subcategoryName || '';
            const subcategoryHeader = subcategoryElement.querySelector('.subcategory-header');
            const subcategoryMatches = subcategoryName.includes(searchTerm);

            const examples = subcategoryElement.querySelectorAll('.example-item');
            examples.forEach(exampleItem => {
                const exampleName = exampleItem.dataset.exampleName || '';
                const exampleMatches = exampleName.includes(searchTerm);

                if (exampleMatches || subcategoryMatches || categoryMatches) {
                    exampleItem.classList.remove('hidden');
                    subcategoryVisible = true; // Make subcategory visible if any example matches
                    categoryVisible = true;  // Make category visible as well
                } else {
                    exampleItem.classList.add('hidden');
                }
            });

            // Show/hide subcategory based on children or direct match
            if (subcategoryVisible || subcategoryMatches) {
                subcategoryElement.classList.remove('hidden');
                // Optionally expand matching subcategories
                setCollapseState(subcategoryElement, false); 
                categoryVisible = true; // Make parent category visible
            } else {
                subcategoryElement.classList.add('hidden');
            }
        });

        // Show/hide category based on children or direct match
        if (categoryVisible || categoryMatches) {
            categoryElement.classList.remove('hidden');
            // Optionally expand matching categories
            setCollapseState(categoryElement, false); 
        } else {
            categoryElement.classList.add('hidden');
        }
    });
}

// Load example into an iframe
function loadExample(example) {
    // This part remains the same, just need to get references differently if needed
    const activeExampleItem = categoriesContainer.querySelector(`.example-item[data-example-name="${example.name.toLowerCase()}"]`);
    // Clear previous active states
    document.querySelectorAll('.example-item.active').forEach(el => el.classList.remove('active'));
    
    if (activeExampleItem) {
        activeExampleItem.classList.add('active');
    }
    
    exampleTitle.textContent = example.name;
    originalLink.href = example.fullUrl;
    
    gameContainer.innerHTML = ''; 
    const iframe = document.createElement('iframe');
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    iframe.style.border = 'none';
    iframe.src = example.fullUrl;
    iframe.title = `${example.name} Example`;
    gameContainer.appendChild(iframe);
    
    currentExample = example;
}

// Initialize the app
async function init() {
    const categories = await fetchExamples();
    populateSidebar(categories); // Initial population (may hide items initially if search persists)

    // Attach search listener
    if (searchInput) {
        searchInput.addEventListener('input', handleSearch);
        // Initial filter application in case of pre-filled search
        handleSearch(); 
    } else {
        console.error("Search input not found!");
    }

    // Add event listeners for global controls
    if (expandAllBtn) {
        expandAllBtn.addEventListener('click', () => {
            // Apply to only visible elements after search?
            document.querySelectorAll('.category:not(.hidden), .subcategory:not(.hidden)')
                    .forEach(el => setCollapseState(el, false));
        });
    } else {
        console.error("Expand All button not found!"); 
    }

    if (collapseAllBtn) {
        collapseAllBtn.addEventListener('click', () => {
             // Apply to only visible elements after search?
            document.querySelectorAll('.category:not(.hidden), .subcategory:not(.hidden)')
                    .forEach(el => setCollapseState(el, true));
        });
    } else {
        console.error("Collapse All button not found!"); 
    }
    document.querySelectorAll('.category:not(.hidden), .subcategory:not(.hidden)')
    .forEach(el => setCollapseState(el, true));
}

// Start the app
init(); 