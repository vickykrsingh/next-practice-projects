"use client"
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Fragment, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
const initialBlogData = {
  title: "",
  description: "",
};

function CreateBlog() {
  const [loading, setLoading] = useState(false);
  const [blogData, setBlogData] = useState(initialBlogData);
  const [openDialog, setOpenDialog] = useState(false);
  const router = useRouter()

  const handleSubmit = async () => {
    console.log('hello onsubmit')
    setLoading(true)
    try {
      const resp = await fetch('/api/blog',{
        body:JSON.stringify(blogData),
        method:'POST'
      })
      const response = await resp.json()
      console.log(response)
      if(response.success){
        setLoading(false)
        setBlogData(initialBlogData)
        setOpenDialog(false)
        router.refresh()
      }
    } catch (error) {
      setLoading(false)
      setBlogData(initialBlogData)
    }
  }
  // if it code is not here also working fine
  useEffect(()=>{
    router.refresh()
  },[])
  return (
    <Fragment>
    <Button onClick={()=>setOpenDialog(true)}>Add new blog</Button>
    <Dialog open={openDialog} onOpenChange={()=>{
      setOpenDialog(false)
      setBlogData(initialBlogData)
    }}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add blog</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              id="name"
              value={blogData.title}
              placeholder="Enter title"
              onChange={(e) =>
                setBlogData({
                  ...blogData,
                  title: e.target.value,
                })
              }
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input
              value={blogData.description}
              placeholder="Enter description"
              name="description"
              id="username"
              onChange={(e) =>
                setBlogData({
                  ...blogData,
                  description: e.target.value,
                })
              }
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button onClick={()=>{
            handleSubmit()
          }} type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
    </Fragment>
  );
}

export default CreateBlog;
