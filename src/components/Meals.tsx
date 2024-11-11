import { ShimmerDiv, ShimmerText } from "shimmer-effects-react";
import Card from "./Card";
import { Meal } from "../utils/interfaces";
import { useNavigate } from "react-router";

interface MealsI {
  meals: Meal[];
  loading: boolean;
}

export default function Meals({ meals, loading }: MealsI) {
  const navigate = useNavigate();
  const openDetailPage = (id: string) => {
    navigate(`/details/${id}`);
  };

  const mealShimmerSkeleton = () => {
    return Array.from({ length: 8 }).map(() => {
      return (
        <div className="h-64 md:h-60 mb-4">
          <ShimmerDiv
            mode="light"
            rounded={0.5}
            height={"100%"}
            width={"100%"}
            loading={true}
          ></ShimmerDiv>
          <ShimmerText
            className="mt-2"
            rounded={0.5}
            mode="light"
            height={15}
            line={1}
            loading={true}
          ></ShimmerText>
        </div>
      );
    });
  };

  return (
      <>
        <h2 className="font-bold text-xl text-orange-950">Popular Meals</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-4">
          {loading
            ? mealShimmerSkeleton()
            : meals &&
              meals.map((meal: Meal) => {
                return (
                  <Card
                    key={meal.idMeal}
                    onClick={() => openDetailPage(meal.idMeal)}
                  >
                    <img
                      className="rounded-t-lg object-center"
                      src={meal.strMealThumb}
                      alt={meal.strMeal}
                    />

                    <h3 className="py-2 px-3 text-lg font-semibold text-orange-950 truncate">
                      {meal.strMeal}
                    </h3>
                  </Card>
                );
              })}
        </div>
      </>
  );
}
