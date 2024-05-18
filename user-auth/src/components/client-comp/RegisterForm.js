"use client";
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
import toast from "react-hot-toast";
import { registerAction } from "../../../action/userAction";
import { useContext } from "react";
import { UserContext, initialUserFormData } from "@/context/userContext";
import { useRouter } from "next/navigation";

export const RegisterForm = () => {
  const {userFormData,setUserFormData} = useContext(UserContext)
  const router = useRouter()
  const handleRegistration = async () => {
    try {
      const result = await registerAction(userFormData)
      if(result.success){
        toast.success(result.message)
        router.push("/auth/login")
      }else{
        toast.error(result.message)
      }
    } catch (error) {
      toast.error(error.message||"something went wrong on client side")
    }
    setUserFormData(initialUserFormData)
  }
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Register Here</CardTitle>
        <CardDescription>New here ? create you own account.</CardDescription>
      </CardHeader>
      <CardContent>
        <form action={()=>handleRegistration()}>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Name of your project" value={userFormData.fullName} onChange={(e)=>setUserFormData({
                ...userFormData,
                fullName:e.target.value
              })} />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <Input id="email" placeholder="Enter your email" value={userFormData.email} onChange={(e)=>setUserFormData({
                ...userFormData,
                email:e.target.value
              })} />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Password</Label>
              <Input id="password" placeholder="Enter your password" value={userFormData.password} onChange={(e)=>setUserFormData({
                ...userFormData,
                password:e.target.value
              })} />
            </div>
          </div>
          <Button type="submit">Register</Button>
        </form>
      </CardContent>
    </Card>
  );
};
