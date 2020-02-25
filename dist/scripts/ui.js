class UI {
  constructor() {
    this.row = document.querySelector('#recipes');
  }
  populateRecipes(meals) {
    let output = [];

    // if meal recipe does not exist, it returns null. If it does not, fill in the page with recipes. If it does, put out a card saying that it does not exist and try again.
    if (meals !== null) {
      meals.forEach(meal => {
        let ingredients = '';
        // add individual li's containing both ingredients and the measurements for said ingredient to string to append to output card. below
        for (let i = 1; i <= 20; i++) {
          if (meal[`strIngredient${i}`] !== '' || meal[`strMeasure${i}`] !== '') ingredients += `<li>${meal[`strIngredient${i}`] + ' - ' + meal[`strMeasure${i}`]}</li>`;
        }
        // create card and append meal name, ingredients, and instructions
        output += `
        <div class="col-md-6 mb-4">
            <div class="card h-100">
                <div class = "card-header text-center">
                    <h3>${meal['strMeal']}</h3>
                </div>
                <div class="card-body">
                    <ul>
                    <li style="list-style-type:none" class="text-center">Ingredient - Quantity</li>
                    <br>
                    ${ingredients}
                    </ul>
                    <p>${meal['strInstructions']}</p>
                </div>
                <div class="card-footer text-center">
                    Bon Appétit!
                </div>
            </div>
        </div>
        `;
      });
      this.row.innerHTML = output;
      // if meal does not exist
    } else {
      this.row.innerHTML = `        
            <div class="col mb-4">
                <div class="card h-100">
                    <div class = "card-header text-center">
                        <h3>The recipe you have entered isn't here. Enter another recipe</h3>
                    </div>
                </div>
            </div>
            `;
    }
  }
}
