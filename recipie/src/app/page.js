import RecipeList from "./recipe-list/page";

async function fetchListOfRecipes(){
  try{
    const apiResponse = await fetch('https://dummyjson.com/recipes')
    const data = await apiResponse.json()
    return data?.recipes;
  }catch(error){
    return null;
  }
}

export default async function Home() {
  const Recipes = await fetchListOfRecipes()
  return (
    <main >
      <RecipeList Recipes={Recipes} />
    </main>
  );
}
