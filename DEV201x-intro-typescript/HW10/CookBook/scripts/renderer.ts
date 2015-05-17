class Renderer {

    //Example how the RecipeCategories<T> generic is used.
    renderCategories(recipeCategoriesSummary: RecipeData.RecipeCategories<RecipeData.IRecipeCategorySummary>) {
      var recipeSelect = document.getElementById('RecipeCategory');
      recipeCategoriesSummary.items.forEach((category) => {
        var opt = document.createElement('option');
        opt.setAttribute('title', category.title);
        opt.innerHTML = category.text;
        recipeSelect.appendChild(opt);
        });
    }

    renderCategory(category: RecipeData.IRecipeCategory) {
        //Update foodgroups bullet points
        var foodGroups = (<HTMLSelectElement> document.getElementById('FoodGroups'));
        foodGroups.value = '';
        var html = '<ul>';
        for (var i = 0, len = category.foodGroups.length; i < len; i++) {
          html += '<li>' + category.foodGroups[i].name + '</li>';
        }
        foodGroups.innerHTML = html + '</ul>';

        //Update description
        var el = (<HTMLSelectElement> document.getElementById('recipeDesc'));
        el.innerHTML = category.description;

        this.renderExamples(category);

      }

      renderExamples(category: RecipeData.IRecipeCategory) {
        //Update examples
        var examples = (<HTMLSelectElement> document.getElementById('examples'));
        examples.value = '';

        var html = '<ol>';
        for (var i = 0, len = category.examples.length; i < len; i++) {
          var example = category.examples[i];
          var ingredients = example.ingredients.map((ingredient) => {
            return ingredient.name;
            });

          html += '<li>' +
          '<h4>' + example.name + ' </h4>' +
          '<strong>Ingredients: </strong>' + ingredients.join(', ') +
          '<br /><strong>Preparation Time: </strong>' + example.prepTime +
          '</li>';
        }

        examples.innerHTML = html + '</ol>';
      }

      renderError() {
        var examples = (<HTMLSelectElement> document.getElementById('examples'));
        examples.value = 'Unable to load data!';
      }
    }
