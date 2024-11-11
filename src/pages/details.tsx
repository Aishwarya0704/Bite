import { useEffect, useState } from "react";
import Ingredients from "../components/Ingredients";
import Instructions from "../components/Instructions";
import { useParams } from "react-router";
import { DetailMeal, IngredientI } from "../utils/interfaces";
import ReferenceVideo from "../components/ReferenceVideo";
import { ShimmerDiv, ShimmerText } from "shimmer-effects-react";

export default function Details() {
  const { id } = useParams();
  const [meals, setDetailOfMeal] = useState<DetailMeal>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getDetailsOfMeal = async () => {
      setLoading(true);
      const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
      await fetch(url)
        .then(async (response) => {
          const data = await response.json();

          const ingredientList: IngredientI[] = [];
          for (let i = 1; i <= 20; i++) {
            if (
              data?.meals[0]?.[`strIngredient${i}`] &&
              data?.meals[0]?.[`strMeasure${i}`]
            ) {
              ingredientList.push({
                strIngredient: data?.meals[0]?.[`strIngredient${i}`],
                strMeasure: data?.meals[0]?.[`strMeasure${i}`],
              });
            }
          }

          const mealdetails: DetailMeal = {
            strMealThumb: data?.meals[0]?.strMealThumb,
            strMeal: data?.meals[0]?.strMeal,
            strCategory: data?.meals[0]?.strCategory,
            strArea: data?.meals[0]?.strArea,
            strYoutube: data?.meals[0]?.strYoutube,
            strInstructions: data?.meals[0]?.strInstructions,
            strIngredients: ingredientList,
          };
          setDetailOfMeal(mealdetails);
        })
        .catch((e) => {
          console.error("Failed to fetch meals", e);
        })
        .finally(() => {
          setLoading(false);
        });
    };

    getDetailsOfMeal();
  }, [id]);

  return (
    <>
      <div className="py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <div className="shadow-lg border border-slate-200 rounded-lg md:px-8 p-5 mb-8">
              <ShimmerDiv
                mode="light"
                height={"350px"}
                width={"100%"}
                rounded={0.5}
                loading={loading}
              >
                {meals && (
                  <img
                    className="rounded-lg h-[250px] md:h-[350px] w-full"
                    src={meals.strMealThumb}
                    alt={meals.strMeal}
                  />
                )}
              </ShimmerDiv>

              <ShimmerText
                className="mt-4"
                mode="light"
                line={1}
                loading={loading}
              >
                <h1 className="text-orange-950 font-semibold md:text-lg mt-2">
                  {meals && meals.strMeal}
                </h1>
              </ShimmerText>

              <ShimmerText
                className="mt-1"
                mode="light"
                line={1}
                loading={loading}
              >
                <p className="text-green-700 md:text-base mt-1">
                  {meals && meals.strCategory} - {meals && meals.strArea}
                </p>
              </ShimmerText>
            </div>

            <Instructions
              instructions={meals && meals.strInstructions}
              loading={loading}
            />
          </div>
          <Ingredients
            ingredients={meals && meals.strIngredients}
            loading={loading}
          />
        </div>
        <ReferenceVideo
          youtubeVideo={meals && meals.strYoutube}
          loading={loading}
        />
      </div>
    </>
  );
}
