document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const recipeSlug = urlParams.get('id');

    function showAll() {
        document.querySelectorAll('div, br').forEach(el => el.classList.remove('hidden'));
    }

    function redirect(id) {
        window.location.href = `https://froznanna.github.io/recipe?id=${id}`;
    }

    const createList = (items, elementId) => {
        let listElement = document.getElementById(elementId);
        if (!listElement) return;
        listElement.innerHTML = ''; 
        items.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            listElement.appendChild(li);
        });
    };

    if (!recipeSlug) {
        // View all recipes from list.json
        fetch('./src/recipes/list.json')
            .then(response => response.json())
            .then(data => {
                document.getElementById('header').textContent = "Recipes";
                data.forEach(recipe => {
                    let button = document.createElement('button');
                    button.className = "recipeBtn"; 
                    button.textContent = recipe.title;
                    button.addEventListener('click', () => redirect(recipe.slug));
                    document.body.appendChild(button);
                });
            })
            .catch(err => console.error('Error fetching list:', err));

    } else {
        // View specific recipe
        fetch(`./src/recipes/data/${recipeSlug}.json`)
            .then(response => {
                if (!response.ok) throw new Error('Recipe not found');
                return response.json();
            })
            .then(recipe => {
                showAll();
                
                // Set the Back button to go back to your recipe list
                document.getElementById('back').onclick = () => {
                    window.location.href = 'https://froznanna.github.io/recipe';
                };

                document.getElementById('title').textContent = recipe.title;
                let header = document.getElementById('header');
                header.textContent = recipe.title;
                header.href = recipe.link;

                // Fixed image path based on slug
                let image = document.getElementById('image');
                image.src = `./src/recipes/img/${recipeSlug}.jpg`;
                image.alt = recipe.title;

                createList(recipe.ingredients, 'ingredients');
                createList(recipe.method, 'method');
                createList(recipe.notes, 'notes');
            })
            .catch(error => {
                console.error(error);
                document.getElementById('header').textContent = "Recipe Not Found";
                document.getElementById('title').textContent = "Recipe Not Found";
                let warning = document.createElement('p');
                warning.textContent = "Recipe does not exist";
                warning.classList.add('subtitle');
                document.body.appendChild(warning);
            });
    }
});