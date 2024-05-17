"use client"
import { useState } from 'react';
import { Edit,Trash } from 'lucide-react';
import { useRouter } from 'next/navigation';
import UpdateBlog from './UpdateBlog';

const BlogList = ({ blogs }) => {
  const [selectedBlog, setSelectedBlog] = useState(null);
  const router = useRouter()

  const handleEditClick = (blogId) => {
    console.log(blogId)
    // Handle edit click
  };

  const handleDeleteClick = async (blogId) => {
    
    // Handle delete click
    console.log(blogId)
    try {
      const apiResponse = await fetch(`http://localhost:3000/api/blog?id=${blogId}`,{
        method:'DELETE',
      })
      const resp = await apiResponse.json()
      console.log(resp)
      if(resp.success){ 
        router.refresh()
      }else{
        console.log(resp)
      }
    } catch (error) {
      console.log(error.message)
    }
  };

  return (
    <div className="my-8 min-h-screen w-full flex flex-col items-center">
      {blogs.length>0 ? blogs.map((blog) => (
        <div
          key={blog._id}
          className="rounded-lg shadow-md w-full md:w-3/4 lg:w-1/2 p-4 mb-4 bg-gray-300"
        >
          <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
          <p className="text-gray-700 mb-4">{blog.description}</p>
          <div className="flex justify-end">
            <UpdateBlog blog={blog} />
            <button
              onClick={() => handleDeleteClick(blog._id)}
              className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 flex items-center justify-center gap-2"
            >
              <Trash size={20}/>
              Delete
            </button>
          </div>
        </div>
      )) : <h1 className='text-3xl text-muted text-gray-400 font-semibold'>No data found ! create one</h1>}
    </div>
  );
};

export default BlogList;
