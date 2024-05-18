import { cookies } from "next/headers"
import { NextResponse } from "next/server"

export function middleware(request) {
    const path = request.nextUrl.pathname
    console.log(path)
    const publicPath = path==='/auth/login' || path==='/auth/register'
    const token = cookies().get('token')?.value || ''

    if(publicPath && token!==''){
        return NextResponse.redirect(new URL('/',request.nextUrl))
    }
    if(!publicPath && token===''){
        return NextResponse.redirect(new URL('/auth/login',request.nextUrl))
    }
     
}

export const config = {
    matcher:['/auth/login','/auth/register']
}