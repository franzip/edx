
//class logic
class Recipes {
  recipeType: RecipeItem[];

  get recipeItem() {
    return this.recipeType;
  }

  set recipeItem(_recipeItems: RecipeItem[]) {
    this.recipeType = _recipeItems;
  }
}

class RecipeItem {
  name: string;
  class: RecipeClass[];

  //TODO: Add get and set blocks for the name variable above. Use "recipeItemName" for the method names and "recipeTypeName" for the param
  //of the set block. Make sure you include the correct type declaration in your set block parameter.
  get recipeItemName(): string {
    return this.name;
  }
  set recipeItemName(recipeTypeName: string) {
    this.name = recipeTypeName;
  }

  //TODO: Add get and set blocks for the class variable above. Use "recipeItemClass" for the method names and "recipeItemClass" for the param
  //of the set block. Make sure you include the correct type declaration in your set block parameter.

  get recipeItemClass(): RecipeClass[] {
    return this.class;
  }

  set recipeItemClass(recipeItemClass: RecipeClass[]) {
    this.class = recipeItemClass;
  }
}

//TODO: Create a class called "RecipeClass" that includes a single member variable named "type" which has a "string" type declaration. Then
//create the get and set blocks for that variable using "recipeType" as the method names and "_type" as the parameter name for the set block.
class RecipeClass {
  //member variable goes here:
  type: string;

  get recipeType(): string {
    return this.type;
  }

  set recipeType(_type: string) {
    this.type = _type;
  }
}
