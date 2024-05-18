"use client"
import React, { Fragment, useContext } from 'react'
import { FormDialog } from './FormDialog'
import { Button } from '../ui/button'
import { userContext } from '@/app/context/userContext'

function AddNewUser() {
    const {setIsOpen,userFormData} = useContext(userContext)
  return (
    <Fragment>
        <Button onClick={()=>setIsOpen(true)} >Add New User</Button>
        <FormDialog/>
    </Fragment>
  )
}

export default AddNewUser