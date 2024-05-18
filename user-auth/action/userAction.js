"use server"
import dbConnection from "@/lib/dbConnection";
import userModel from "../models/userModel";
import bcrypt from "bcryptjs";
import jwt, { decode } from 'jsonwebtoken'
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { redirect } from "next/navigation";

export const registerAction = async (userData) => {
  await dbConnection();
  try {
    const { fullName, email, password } = userData;
    if (!fullName || !email || !password) {
      return {
        success: false,
        message: "all fields are required.",
      };
    }
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return {
        success: false,
        message: "user already registered!",
      };
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = await userModel.create({
      fullName,
      email,
      password: hashedPassword,
    });
    if (newUser) {
      return {
        success: true,
        message: "user registration successfully.",
      };
    } else {
      return {
        success: false,
        message: "something went wrong please try again later.",
      };
    }
  } catch (error) {
    console.log(error.message);
    return {
      success: false,
      message: "something went wrong.",
    };
  }
};


export const loginAction = async (userData) => {
    await dbConnection()
    try {
        const {email,password} = userData
        if(!email||!password) {
            return {
                success:false,
                message:"All fields are required."
            }
        }
        const user = await userModel.findOne({email})
        if(!user){
            return {
                success:false,
                message:"Invalid email or password."
            }
        }
        const checkPassword = await bcrypt.compare(password,user.password)
        if(!checkPassword){
            return{
                success:false,
                message:"Invalid password"
            }
        }
        const tokenData = {
            id:user.id,
            email:user.email,
            name:user.fullName
        }
        const token = await jwt.sign(tokenData,'DEFAULT_KEY',{expiresIn:'7d'})
        if(!token){
            return {
                success:false,
                message:"please refresh and try again."
            }
        }
        cookies().set('token',token)
        return {
            success:true,
            message:"User login successfully."
        }
    } catch (error) {
        console.log(error.message)
        return {
            success:false,
            message:"something went wrong."
        }
    }
}

export const fetchUserDetail = async (req) => {
    const token = cookies().get('token')?.value || ''
    if(token==''){
        return redirect('/auth/login')
    }
    const decodedToken = await jwt.verify(token,'DEFAULT_KEY');
    console.log(decodedToken)
    if(!decodedToken){
        return redirect('/auth/login')
    }
    return {
        success:true,
        user:JSON.parse(JSON.stringify(decodedToken))
    }
}

export const logoutAction = async (req) => {
    await cookies().delete('token');
}