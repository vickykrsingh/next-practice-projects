"use client" 

import React from 'react'
import UserState from './userContext'

function CommonContextLayout({children}) {
  return (
    <UserState>
        {children}
    </UserState>
  )
}

export default CommonContextLayout