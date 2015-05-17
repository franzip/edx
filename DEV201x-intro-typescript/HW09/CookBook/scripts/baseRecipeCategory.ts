//FROM MODULES 6-8:
//Copy your BaseRecipeCategory class code

class BaseRecipeCategory  {
  name: string;
  foodGroups: FoodGroup[] = [];

  constructor(name: string, foodGroups: FoodGroup[]) {
    this.name = name;
    this.foodGroups = foodGroups;
  }
}
