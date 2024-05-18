"use client"
import { createContext, useState } from "react";
export const initialUserFormData = {
    fullName:'',
    email:'',
    password:''
}


export const UserContext = createContext();

export default function UserState({children}){
    const [userFormData,setUserFormData] = useState(initialUserFormData)
    return <UserContext.Provider value={{userFormData,setUserFormData}}>
        {children}
    </UserContext.Provider>
}