"use client"
import React from 'react'
import { logoutAction } from '../../../action/userAction'
import { Button } from '../ui/button'

function LogoutBtn() {
    const handleLogout = async () => {
        await logoutAction()
    }
  return (
    <Button onClick={()=>handleLogout()}>Logout</Button>
  )
}

export default LogoutBtn