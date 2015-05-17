//TODO
//Create an IBaseRecipeCategory interface
//It should include a string variable called 'name' and a FoodGroup
//variable called 'foodGroups'.
//HINT the foodGroups variable should be able to hold more than one value

interface IBaseRecipeCategory {
  name: string;
  foodGroups: FoodGroup[];
}

//TODO
//Create an interface for IRecipeCategory that extends IBaseRecipeCategory
//it should include a string variable called 'description'
//and an IExample variable called 'examples' which should be able to hold
//more than one value.

interface IRecipeCategory extends IBaseRecipeCategory {
  description: string;
  examples: IExample[];
}


interface IFoodGroup {
  name: string;
}

//TODO
//Create an IExample interface
//it should include string variables for 'name' an 'prepTime'
//and a Ingredient variable named 'ingredients' which should be
//able to hold more than one value.

interface IExample {
  name: string;
  prepTime: string;
  ingredients: Ingredient[];
}
