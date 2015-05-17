module RecipeData {
  export class FoodGroup implements IFoodGroup {
    name: string;

    constructor(name: string) {
      //FROM MODULE 6:
      //Assign the "name" parameter to the
      //"name" member variable
      this.name = name;
    }
  }
}
