document.addEventListener('DOMContentLoaded', () => {
    //Get the requested recipe ID from the URL (?id=thai-green-curry)
    const urlParams = new URLSearchParams(window.location.search);
    const recipeSlug = urlParams.get('id');

    function hideAll() { //Hides divs and br, whilst keeping header, home button and background
        let divs = document.querySelectorAll('div');
        divs.forEach(div => {
            div.style.display = 'none';
        })

        let gaps = document.querySelectorAll('br');
        gaps.forEach(gap => {
            gap.style.display = 'none';
        })
    }

    function redirect(id) {
        window.location.href = `https://froznanna.github.io/recipe?id=${id}`;
    }

    fetch('https://froznanna.github.io/src/recipes/recipes.json')
        .then(response => response.json())
        .then(data => {
            if (!recipeSlug) { //If no ID is provided - show list of all recipes
                hideAll();
                document.getElementById('header').textContent = "Recipes";
                data.forEach(recipe => {
                    let button = document.createElement('button');
                    button.title = recipe.title;
                    button.textContent = recipe.title;
                    button.addEventListener('click', () => redirect(recipe.slug));
                    document.body.appendChild(button);
                })
                return;
            }

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
                hideAll();
                document.getElementById('title').textContent = "Recipe Not Found";
                document.getElementById('header').textContent = "Recipe Not Found";
                let warning = document.createElement('p');
                warning.textContent = "Recipe does not exist";
                warning.classList.add('subtitle');
                document.body.appendChild(warning);
            }
        })
        .catch(error => console.error('Error fetching data:', error));
});