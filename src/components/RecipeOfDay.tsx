import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { DayRecipe } from "../utils/interfaces";
import { ShimmerDiv } from "shimmer-effects-react";

export default function RecipeOfDay() {
  const navigate = useNavigate();
  const [recipeOfDay, setRecipeOfDay] = useState<DayRecipe>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getMeals = async () => {
      setLoading(true);
      const url = "https://www.themealdb.com/api/json/v1/1/random.php";
      await fetch(url)
        .then(async (response) => {
          const data = await response.json();
          const recipeOfDay: DayRecipe = {
            strMealThumb: data?.meals[0]?.strMealThumb,
            strMeal: data?.meals[0]?.strMeal,
            idMeal: data?.meals[0]?.idMeal,
          };
          setRecipeOfDay(recipeOfDay);
        })
        .catch((e) => {
          console.error("Failed to fetch meals", e);
        })
        .finally(() => {
          setLoading(false);
        });
    };
    getMeals();
  }, []);

  const openDetailPage = (id: string) => {
    navigate(`/details/${id}`);
  };

  return (
    <ShimmerDiv
      mode="light"
      height={"400px"}
      width={"100%"}
      rounded={0.5}
      loading={loading}
    >
      {recipeOfDay && (
        <>
          <h2 className="font-bold text-xl text-orange-950">
            Recipe of the Day
          </h2>
          <div
            className="cursor-pointer shadow-lg border border-slate-200 rounded-lg mt-4"
            onClick={() => openDetailPage(recipeOfDay.idMeal)}
          >
            <img
              className="rounded-t-lg h-[300px] md:h-[400px] w-full object-center"
              src={recipeOfDay.strMealThumb}
              alt={recipeOfDay.strMeal}
            />
            <p className="py-2 px-3 text-lg font-semibold text-orange-950">
              {recipeOfDay.strMeal}
            </p>
          </div>
        </>
      )}
    </ShimmerDiv>
  );
}
