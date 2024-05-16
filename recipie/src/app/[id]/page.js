import React, { Suspense } from "react";
import RecipeLoading from "./loading";

const fetchSingleRecipe = async (id) => {
  try {
    const apiResponse = await fetch(`https://dummyjson.com/recipes/${id}`);
    const data = await apiResponse.json();
    console.log(data);
    return data;
  } catch (error) {
    return null;
  }
};

async function Recipe({ params }) {
  const recipe = await fetchSingleRecipe(params.id);
  return (
    <Suspense fallback={<RecipeLoading />}>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img
            src={recipe.image}
            alt={recipe.name}
            className="w-full h-64 object-cover object-center"
          />
          <div className="p-6">
            <h1 className="text-3xl font-semibold mb-4">{recipe.name}</h1>
            <div className="flex items-center mb-4">
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-yellow-500 mr-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M3.197 18.653a1 1 0 01-1.54-1.279l1.42-1.75a1 1 0 011.539 0l1.42 1.75a1 1 0 01-.769 1.604l-1.964-.483zM10 17a1 1 0 01-.637-.231l-1.964-1.382a1 1 0 01-.263-1.316l1.195-2.565a1 1 0 011.798 0l1.195 2.565a1 1 0 01-.263 1.316l-1.964 1.382A1 1 0 0110 17zm6.803-1.347a1 1 0 00-1.54-1.279l-1.964 1.382a1 1 0 01-1.052 0l-1.964-1.382a1 1 0 00-1.54 1.279l1.42 1.75a1 1 0 001.539 0l1.42-1.75a1 1 0 011.539 0l1.42 1.75a1 1 0 00.153.117z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-gray-600">{recipe.rating}</span>
                <span className="ml-1 text-sm text-gray-500">
                  ({recipe.reviewCount} reviews)
                </span>
              </div>
              <div className="ml-4 text-gray-600">{recipe.cuisine}</div>
              <div className="ml-4 text-gray-600">{recipe.difficulty}</div>
              <div className="ml-4 text-gray-600">
                {recipe.servings} servings
              </div>
            </div>
            <div className="mb-4">
              <h2 className="text-xl font-semibold mb-2">Ingredients:</h2>
              <ul className="list-disc ml-6">
                {recipe?.ingredients?.length > 0 &&
                  recipe.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                  ))}
              </ul>
            </div>
            <div className="mb-4">
              <h2 className="text-xl font-semibold mb-2">Instructions:</h2>
              <ol className="list-decimal ml-6">
                {recipe?.instruction?.length > 0 &&
                  recipe.instructions.map((instruction, index) => (
                    <li key={index}>{instruction}</li>
                  ))}
              </ol>
            </div>
            <div className="flex justify-between">
              <div>
                <span className="text-gray-600">
                  Prep Time: {recipe.prepTimeMinutes} minutes
                </span>
                <span className="ml-4 text-gray-600">
                  Cook Time: {recipe.cookTimeMinutes} minutes
                </span>
              </div>
              <div className="text-gray-600">
                Calories per Serving: {recipe.caloriesPerServing}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Suspense>
  );
}

export default Recipe;
