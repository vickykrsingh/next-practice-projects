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
import { useState } from "react";
import toast from "react-hot-toast";
import { loginAction } from "../../../action/userAction";
import { useRouter } from "next/navigation";

export const LoginForm = () => {
  const [data,setData] = useState({
    email:'',
    password:''
  })
  const router = useRouter()
  const handleLogin = async () => {
    try {
      const result = await loginAction(data)
      if(result.success){
        toast.success(result.message)
        setData({
          email:'',
          password:''
        })
        router.push('/')
      }else{
        toast.error(result.message)
        setData({
          email:'',
          password:''
        })
      }
    } catch (error) {
      toast.error(error.message||"something went wrong.")
    }
  }
  return (
    <Card className="w-[350px]">
    <CardHeader>
      <CardTitle>Login here</CardTitle>
      <CardDescription>Already have ? Enter your own credentials.</CardDescription>
    </CardHeader>
    <CardContent>
      <form action={()=>handleLogin()}>
        <div className="grid w-full items-center gap-4">
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="email">Email</Label>
            <Input id="email" placeholder="Enter your email" value={data.email} onChange={(e)=>setData({
              ...data,
              email:e.target.value
            })} />
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="name">Password</Label>
            <Input id="password" placeholder="Enter your password" value={data.password} onChange={(e)=>setData({
              ...data,
              password:e.target.value
            })} />
          </div>
        </div>
        <Button type="submit" >Login</Button>
      </form>
    </CardContent>
  </Card>
  )
};
