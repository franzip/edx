//TODO:
//Modify this class to it implements the IBaseRecipeCategory interface

class BaseRecipeCategory {
  name: string;
  foodGroups: FoodGroup[] = [];

  //FROM MODULE 6:
  //Add constructor using the variable names above
  //as the parameters (so you'll have two parameters).
  //Assign the parameter value to the associated member variables.
  constructor(name: string, foodGroups: FoodGroup[]) {
    this.name = name;
    this.foodGroups = foodGroups;
  }
}
