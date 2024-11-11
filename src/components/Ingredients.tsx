import { ShimmerCategoryItems } from "shimmer-effects-react";
import { IngredientI } from "../utils/interfaces";

interface IngredientsI {
  ingredients: IngredientI[] | undefined;
  loading: boolean;
}

export default function Ingredients({ ingredients, loading }: IngredientsI) {
  return (
    <div className="shadow-lg border border-slate-200 rounded-lg px-6 md:px-8 py-3">
      {loading ? (
        <ShimmerCategoryItems
          items={10}
          mode="light"
          hasButton={false}
          imageHeight={80}
          imageRounded={5}
        />
      ) : (
        ingredients && (
          <>
            <h2 className="text-orange-950 font-semibold text-lg">
              Ingredients
            </h2>
            <div className="list-disc mt-4">
              {ingredients.map((ingredient) => {
                return (
                  <div className="shadow-sm border border-slate-200 rounded-lg mb-2 md:mb-5">
                    <div className="flex p-2 items-center">
                      <img
                        className="h-11 md:h-12 w-11 md:w-12"
                        src={`https://www.themealdb.com/images/ingredients/${ingredient.strIngredient}.png`}
                      />
                      <div className="ml-4">
                        <p className="text-orange-950 text-lg font-semibold capitalize">
                          {ingredient.strIngredient}
                        </p>
                        <p className="text-green-700 text-base">
                          Measurement: {ingredient.strMeasure}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        )
      )}
    </div>
  );
}
