import AddNewUser from "@/components/clientComponent/AddNewUser";
import ListOfUsers from "@/components/clientComponent/ListOfUsers";

export default async function Home() {
  return (
    <div className="w-full min-h-screen p-2 md:p-5 lg:p-10 bg-slate-300 flex flex-col gap-4">
      <AddNewUser/>
      <ListOfUsers/>
    </div>
  );
}
