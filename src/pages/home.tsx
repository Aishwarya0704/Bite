import { useEffect, useState } from "react";
import Meals from "../components/Meals";
import RecipeOfDay from "../components/RecipeOfDay";
import Searchbar from "../components/SearchBar";
import { Meal } from "../utils/interfaces";

export default function Home() {
  const [query, setQuery] = useState<string>("");
  const [meals, setMeals] = useState<Meal[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let timer: number;

    const getMeals = async () => {
      setLoading(true);
      const url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${query}`;
      timer = setTimeout(async () => {
        await fetch(url)
          .then(async (response) => {
            const data = await response.json();
            setMeals(data.meals.splice(0, 8));
          })
          .catch((e) => {
            console.error("Failed to fetch meals", e);
          })
          .finally(() => {
            setLoading(false);
          });
      }, 2000);
    };

    getMeals();

    return () => {
      clearTimeout(timer);
    };
  }, [query]);

  const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  return (
    <div className="p-2 md:p-8">
      <div>
        <Searchbar query={query} onSearch={onSearch} />
      </div>
      <div className="pt-5 md:pt-8">
        <RecipeOfDay />
      </div>
      <div className="pt-5 md:pt-8">
        <Meals meals={meals} loading={loading} />
      </div>
    </div>
  );
}
