class UI {
  constructor() {
    this.row = document.querySelector('#recipes');
  }
  populateRecipes(meals) {
    let output = [];
    let ingredients = '';

    // if meal recipe does not exist, it returns null. If it does not, fill in the page with recipes. If it does, put out a card saying that it does not exist and try again.
    if (meals !== null) {
      let i = 0;
      while (meals[i] !== undefined && i < meals.length) {
        // It's possible for ingredient and measurement amount to have a value of nothing, or null or undefined on occasion. Take care of this here
        if (
          (meals[i][`strIngredient${i}`] !== '' || meals[i][`strMeasure${i}`] !== '') &&
          (meals[i][`strIngredient${i}`] !== null || meals[i][`strMeasure${i}`] !== null) &&
          (meals[i][`strIngredient${i}`] !== undefined || meals[i][`strMeasure${i}`] !== undefined)
        ) {
          ingredients += `<li>${meals[i][`strIngredient${i}`] + ' - ' + meals[i][`strMeasure${i}`]}</li>`;
        }
        i++;
      }

      meals.forEach(meal => {
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
