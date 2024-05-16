import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

function RecipeList({ Recipes }) {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 px-4 sm:px-8 lg:px-20 w-full min-h-screen py-10">
      {Recipes.map((r) => (
        <Card>
          <CardContent
            key={r.id}
            className="cursor-pointer shadow-md hover:scale-[1.01] transition-all rounded-md overflow-hidden w-full sm:w-auto h-[21rem] text-black bg-gray-200 p-0"
          >
            <Link href={`/${r.id}`}>
              <img
                src={r.image}
                alt={r.name || "recipe-image"}
                className="object-cover w-full h-48 sm:h-64"
              />
              <div className="p-4">
                <div className="text-lg font-semibold">{r.name}</div>
                <div className="text-gray-500">{r.rating}</div>
              </div>
            </Link>
          </CardContent>
        </Card>
      ))}
    </section>
  );
}

export default RecipeList;
