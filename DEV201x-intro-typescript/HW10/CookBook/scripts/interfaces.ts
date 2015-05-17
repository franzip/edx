module RecipeData {
  //FROM MODULE 7&8:
  //Create an IBaseRecipeCategory interface
  //It should include a string variable called 'name' and a FoodGroup
  //variable called 'foodGroups'.
  //HINT the foodGroups variable should be able to hold more than one value
  interface IBaseRecipeCategory {
    name: string;
    foodGroups: FoodGroup[];
  }

  //FROM MODULE 7&8:
  //Create an interface for IRecipeCategory that extends IBaseRecipeCategory
  //it should include a string variable called 'description'
  //and an IExample variable called 'examples' which should be able to hold
  //more than one value.
  export interface IRecipeCategory extends IBaseRecipeCategory {
    description: string;
    examples: IExample[];
  }

  //TODO
  //Create an interface named IRecipeCategorySummary
  //that has the following members
  //text - string
  //title - string

  export interface IRecipeCategorySummary {
    text: string;
    title: string;
  }

  export interface IFoodGroup {
    name: string;
  }

  //FROM MODULE 7&8
  //Create an IExample interface
  //it should include string variables for 'name' an 'prepTime'
  //and a Ingredient variable named 'ingredients' which should be
  //able to hold more than one value.
  export interface IExample {
    name: string;
    prepTime: string;
    ingredients: Ingredient[];
  }
}
