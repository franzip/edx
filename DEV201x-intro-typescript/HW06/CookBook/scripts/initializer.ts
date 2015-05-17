var recipeCategories: RecipeCategories;
var renderer = null;

window.onload = () => {
  var categoriesSelect = (<HTMLSelectElement> document.getElementById('RecipeCategory'));

  //TODO
  //categoriesSelect.onchange currently doesn't do anything.
  //Assign a lambda expression to "onchange" that when called,
  //invokes the "loadRecipes" function that you'll see below.
  //The lambda parentheses will be empty.
  //HINT: Refer to Module 4:Functions if you need help writing the lambda.

  categoriesSelect.onchange = () => loadRecipes();

  //TODO
  //Create a new RecipeLoader instance and name it "loader".
  //Pass the following string into the RecipeLoader's constructor:
  //  '/JSON/recipeTypes.json'
  //HINT: Use the "new" keyword to create the instance.
  var loader = new RecipeLoader('./JSON/recipeTypes.json');

  //TODO
  //Call the loader object's load() function ("loader" is the object
  //you created in the previous TODO)
  loader.load();
  renderer = new Renderer();
};

function loadRecipes() {
  var el = (<HTMLSelectElement> document.getElementById('RecipeCategory'));
  try {
    var category = recipeCategories.items
    .filter(i => i.name === el.value)
    .reduce(i => (new RecipeCategory(el.value, i.foodGroups, i.description)));
    renderer.renderCategory(category);
  }
  catch (ex) { alert(ex.message) }
}
