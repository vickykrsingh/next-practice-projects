import React from 'react'
import {SignIn} from '@clerk/nextjs'

function SignInPage() {
  return (
    <main className='flex justify-center items-center  w-full '>
        <SignIn/>
    </main>
  )
}

export default SignInPage