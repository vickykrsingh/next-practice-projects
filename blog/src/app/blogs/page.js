import BlogList from '../component/BlogList'
import CreateBlog from '../component/CreateBlog'
import React from 'react'
const fetchAllBlog = async () => {
   try {
    const resp = await fetch('http://localhost:3000/api/blog',{
      method:'GET',
      cache:'no-store'
    })
    const data = await resp.json()
    return data.data
   } catch (error) {
    console.log(error.message)
   }
}
async function Blogs() {
    const data = await fetchAllBlog()
  return (
    <div className='w-full min-h-screen p-10'>
        <CreateBlog/>
        <BlogList blogs={data} />
    </div>
  )
}

export default Blogs