import Link from 'next/link'
import React from 'react'

function NotFound() {
  return (
    <div>
        <h1>This page cannot be found.</h1>
        <Link href={'/'}>back to home</Link>
    </div>
  )
}

export default NotFound