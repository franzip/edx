/// <reference path="typings/jquery.d.ts" />

class RecipeLoader {
  constructor(public url: string) {}

  load() {
    $.getJSON(this.url,(data) => {
      this.mapData(data);
      });
  }

  mapData(data) {
    if (data) {
      var categories: any[] = data.recipeCategories;
      //TODO
      //Change RecipeCategories to use the new generic type.
      //Pass IRecipeCategory as the type
      recipeCategories = new RecipeData.RecipeCategories<RecipeData.IRecipeCategory>();
      //TODO
      //Create a new RecipeCategories object named recipeCategoriesSummary
      //and pass an IRecipeCategorySummary as the generic value.
      var recipeCategoriesSummary = new RecipeData.RecipeCategories<RecipeData.IRecipeCategorySummary>();

      categories.forEach((category) => {
        var recipeCategory = new RecipeData.RecipeCategory({
                                    name: category.title,
                                    foodGroups: this.getFoodGroups(category),
                                    description: category.details,
                                    examples: this.getExamples(category)
                             });
        recipeCategories.items.push(recipeCategory);

      //TODO
      //Create a new RecipeCategorySummary instance and pass
      //the category.title and category.details into the constructor.
      //Once the class is created add it into the recipeCategoriesSummary
      //object's items collection
      //HINT: The constructor object passed must match the IRecipeCategorySummary interface
      //HINT: Use the push() function
      var recipeCategorySummary = new RecipeData.RecipeCategorySummary({
                                        text: category.title,
                                        title: category.details
                                  });
      recipeCategoriesSummary.items.push(recipeCategorySummary);
      });

      //Render the categories into the select
      renderer.renderCategories(recipeCategoriesSummary);
    } else {
      renderer.renderError();
    }
  }

  getFoodGroups(category) : RecipeData.FoodGroup[] {
  //Map foodgroups data to TS object
  return category.foodGroups.map((foodGroup) => {
    var group = new RecipeData.FoodGroup(foodGroup.title);
    return group;
    });
  }

  getExamples(category) : RecipeData.IExample[] {
    return category.examples.map((example) => {
      return new RecipeData.Example({
        name: example.name,
        ingredients: this.getIngredients(example),
        prepTime: example.prepTime
        });
      });
  }

  getIngredients(example): RecipeData.Ingredient[] {
    return example.ingredients.map((value) => {
      return new RecipeData.Ingredient(value);
      });
  }
}
