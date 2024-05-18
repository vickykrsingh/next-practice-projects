import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import { fetchUserDetail } from "../../action/userAction";
import LogoutBtn from "@/components/client-comp/LogoutBtn";

export default async function Home() {
  const res = await fetchUserDetail()
  console.log(res)
  return (
    <div className="grid grid-col-1 md:grid-col-2 lg:grid-col-3 gap-2 w-full min-h-[90vh]">
      <Card>
        <CardContent className="flex flex-col gap-2 p-4 bg-gray-500">
          <div>{res.user.name}</div>
          <div>{res.user.email}</div>
          <LogoutBtn/>
        </CardContent>

      </Card>
    </div>
  );
}
