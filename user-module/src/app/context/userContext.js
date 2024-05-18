"use client"
import { createContext, useState } from "react";

export const userContext = createContext();
export const initialFormData = {
    firstName:'',
    lastName:'',
    email:'',
    address:''
}


export default function UserState({children}){
    const [currentEditedId,setCurrentEditedId] = useState(null)
    const [isOpen,setIsOpen] = useState(false)
    const [userFormData,setUserFormData] = useState(initialFormData)

    return (
        <userContext.Provider value={{currentEditedId,setCurrentEditedId,isOpen,setIsOpen,userFormData,setUserFormData}} >
            {children}
        </userContext.Provider>
    )
}