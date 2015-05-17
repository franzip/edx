class BaseRecipeCategory {
  name: string;
  foodGroups: FoodGroup[] = [];

  //TODO:
  //Add constructor using the variable names above
  //as the parameters (so you'll have two parameters).
  //Assign the parameter value to the associated member variables.
  constructor(name: string, foodGroups: FoodGroup[]) {
    this.name = name;
    this.foodGroups = foodGroups;
  }

}
