import React from 'react'
import {SignUp} from '@clerk/nextjs'

function SignUpPage() {
  return (
    <main className='flex justify-center items-center  w-full '>
        <SignUp/>
    </main>
  )
}

export default SignUpPage