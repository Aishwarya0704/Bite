export interface Meal {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
}

export interface DayRecipe {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
}

export interface DetailMeal {
  strMealThumb: string;
  strMeal: string;
  strCategory: string;
  strArea: string;
  strYoutube: string;
  strInstructions: string;
  strIngredients: IngredientI[];
}

export interface IngredientI {
  strIngredient: string;
  strMeasure: string;
}
