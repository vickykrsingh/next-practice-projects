import { fetchAllUserAction } from "@/lib/actions";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import UserModuleBtn from "./UserModuleBtn";

async function ListOfUsers() {
  const data = await fetchAllUserAction();
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {data.data.map((d) => (
        <Card key={d._id}>
          <CardContent className="p-2 flex flex-col gap-1" >
            <div className="font-semibold text-lg">
              {d.firstName} {d.lastName}
            </div>
            <div>{d.email}</div>
            <div>{d.address}</div>
          <div className={"flex gap-2 mt-1"}>
            <UserModuleBtn user={d} />
          </div>
          </CardContent>
        </Card>
      ))}
    </main>
  );
}

export default ListOfUsers;
