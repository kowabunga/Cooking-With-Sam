// Get full year for copyright footer
$('#year').text(new Date().getFullYear());

// bring in classes
const ui = new UI(),
  MenuItems = new Menu();
// cache dom items
const input = document.getElementById('input'),
  submit = document.getElementById('submit');

// on  button submit, fetch recipes with given name
// if none are entered, the api simply returns a variety of recipes
submit.addEventListener('click', fetchRecipes);

function fetchRecipes(e) {
  e.preventDefault();
  MenuItems.getMealByName(input.value).then(response => ui.populateRecipes(response.meals));
}
