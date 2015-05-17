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
            //Map category data from XHR call to our TypeScript RecipeCategories
            recipeCategories = new RecipeCategories();
            categories.forEach((category) => {
              var recipeCategory = new RecipeCategory({
                name: category.title,
                foodGroups: this.getFoodGroups(category),
                description: category.details,
                examples: this.getExamples(category)
                });
              recipeCategories.items.push(recipeCategory);
              });

            //Render the categories into the select
            renderer.renderCategories(recipeCategories);
          }
          else {
            renderer.renderError();
          }
        }

        getFoodGroups(category) : FoodGroup[] {
        //Map foodgroups data to TS object
        return category.foodGroups.map((foodGroup) => {
          var group = new FoodGroup(foodGroup.title);
          return group;
          });
      }

      getExamples(category) : IExample[] {
        return category.examples.map((example) => {
          return new Example({
            name: example.name,
            ingredients: this.getIngredients(example),
            prepTime: example.prepTime
            });
          });
      }

      getIngredients(example): Ingredient[] {
        return example.ingredients.map((value) => {
          return new Ingredient(value);
          });
      }
    }
