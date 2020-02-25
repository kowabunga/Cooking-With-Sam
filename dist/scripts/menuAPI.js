class Menu {
  async getMealByName(name) {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`);
    const resData = response.json();
    return resData;
  }
}
