class Renderer {

  renderCategories(recipeCategories: RecipeCategories) {
    var recipeSelect = document.getElementById('RecipeCategory');
    recipeCategories.items.forEach((category) => {
      var opt = document.createElement('option');
      opt.innerHTML = category.name;
      recipeSelect.appendChild(opt);
      });
  }

  renderCategory(category: RecipeCategory) {
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
      }
    }
