"use server"

import { signIn,signOut } from "@/auth"

export const loginAction = async () => {
    try {
        const res = await signIn('github')
        console.log(res)
    } catch (error) {
        console.log(error)
    }
}

export const logoutAction = async() => {
    try { 
        await signOut()
    } catch (error) {
        console.log(error.message)
    } 
}