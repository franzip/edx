module RecipeData {
  //TODO:
  //Modify class to support a single generic parameter that is applied
  //to the items property
  export class RecipeCategories<T> {
    items: T[] = [];
  }
}
