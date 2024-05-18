"use client"

import React from 'react'
import UserState from './userContext'

function UserContextLayout({children}) {
  return (
    <UserState>
        {children}
    </UserState>
  )
}

export default UserContextLayout