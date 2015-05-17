class RecipeLoader {
  request = new XMLHttpRequest();

  constructor(public url: string) {}

  load() {
    this.request.onload = (e) => this.mapData();
    this.request.open('get', this.url, true);
    this.request.send();
  }

  mapData() {
    //class logic
    var data = JSON.parse(this.request.responseText);

    if (data) {
      var categories: any[] = data.recipeCategories;
      //Map category data from XHR call to our TS RecipeCategories
      recipeCategories = new RecipeCategories();
      categories.forEach((category) => {
        //Map foodgroups data to TS object
        var foodGroups: FoodGroup[] = [];
        category.foodGroups.forEach((foodGroup) => {
          var group = new FoodGroup(foodGroup.title);
          foodGroups.push(group);
        });

        var recipeCategory = new RecipeCategory(
                                                category.title,
                                                foodGroups,
                                                category.details);
        recipeCategories.items.push(recipeCategory);
      });

      //Render the categories into the select
      renderer.renderCategories(recipeCategories);
    }
  }
}
