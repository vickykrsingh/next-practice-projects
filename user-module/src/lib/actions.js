"use server"
import { revalidatePath } from "next/cache";
import dbConnection from "./dbConnection";
import userModel from "@/models/userModel";

export const addNewUserAction = async (formData,pathToRevalidate) => {
    await dbConnection()
    try {
        const {firstName,lastName,email,address} = formData;
        if(!firstName || !lastName || !email || !address ){
            return {
                success:false,
                message:"All fields are required."
            }
        }
        const newUser = await userModel.create({
            firstName,
            lastName,
            email,
            address
        })
        if(newUser){
            revalidatePath(pathToRevalidate)
            return {
                success:true,
                message:"New user added successfully."
            }
        }
    } catch (error) {
        return {
            success:false,
            message:"Something went wrong.!"
        }
    }
}

export const fetchAllUserAction = async () => {
    await dbConnection()
    try {
        const data = await userModel.find({});
        if(data){
            return {
                success:true,
                data:JSON.parse(JSON.stringify(data))
            }
        }else{
            return {
                success:false,
                message:"No data found."
            }
        }
    } catch (error) {
        return {
            success:false,
            message:"Something went wrong please try again."
        }
    }
}

export const deleteUserAction = async (userId,pathToRevalidate) => {
    try {
        const deletedUser = await userModel.findByIdAndDelete(userId);
        if(deletedUser){
            revalidatePath(pathToRevalidate)
            return {
                success:true,
                message:"user deleted successfully."
            }
        }else{
            return {
                success:false,
                message:"something went wrong."
            }
        }
    } catch (error) {
        return {
            success:false,
            message:"something went wrong."
        }
    }
}

export const editUserAction = async (userId,formData,pathToRevalidate) => {
    try {
        const editedUser = await userModel.findByIdAndUpdate(userId,formData)
        if(editedUser){
            revalidatePath(pathToRevalidate)
            return {
                success:true,
                message:"user modified successfully."
            }
        }else{
            return {
                success:false,
                message:"something went wrong."
            }
        }
    } catch (error) {
        return {
            success:false,
            message:"something went wrong."
        }
    }
}