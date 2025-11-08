document.addEventListener('DOMContentLoaded', () => {
    //Get the requested recipe ID from the URL (?id=thai-green-curry)
    const urlParams = new URLSearchParams(window.location.search);
    const recipeSlug = urlParams.get('id');

    if (!recipeSlug) {
        // Handle case where no ID is provided (e.g., show an error or list of recipes)
        document.getElementById('title').textContent = "Recipe Not Found";
        return; 
    }

    fetch('https://froznanna.github.io/src/recipes/recipes.json')
        .then(response => response.json())
        .then(data => {
            const recipe = data.find(r => r.slug === recipeSlug);

            if (recipe) {
                let header = document.getElementById('header');
                header.textContent = recipe.title;
                header.href = recipe.link;

                let image = document.getElementById('image');
                image.src = recipe.image;
                image.alt = recipe.title;

                // Function to create list items (li)
                const createList = (items, elementId) => {
                    let listElement = document.getElementById(elementId);
                    listElement.innerHTML = ''; // Clear existing content
                    items.forEach(item => {
                        const li = document.createElement('li');
                        li.textContent = item;
                        listElement.appendChild(li);
                    });
                };

                createList(recipe.ingredients, 'ingredients');
                createList(recipe.method, 'method');
                createList(recipe.notes, 'notes');

            } else {
                document.getElementById('title').textContent = "Recipe Not Found";
            }
        })
        .catch(error => console.error('Error fetching data:', error));
});