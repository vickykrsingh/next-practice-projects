import { currentUser } from "@clerk/nextjs/server";
import Image from "next/image";
import { redirect } from "next/navigation";

export default async function Home() {
  // user is authenticated -> profile infor -> onboarded as candidate or as a recuriter 
  // redirect this user to onboard route
  const user = await currentUser()
  console.log(user)
  const profileInfo = null;
  if(user && !profileInfo?._id) redirect('/onboard')
  return (
    <section>
      Main content
    </section>
  );
}
