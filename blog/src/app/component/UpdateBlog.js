"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Fragment, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Edit } from "lucide-react";
const initialBlogData = {
  title: "",
  description: "",
};

function UpdateBlog({blog}) {
  const [loading, setLoading] = useState(false);
  const [blogData, setBlogData] = useState(initialBlogData);
  const [openDialog, setOpenDialog] = useState(false);
  const router = useRouter();

  const handleSubmit = async () => {
    console.log("hello onsubmit");
    setLoading(true);
    try {
      const resp = await fetch(`/api/blog?id=${blog._id}`, {
        body: JSON.stringify(blogData),
        method: "PUT",
        cache:'no-store'
      });
      const response = await resp.json();
      console.log(response);
      if (response.success) {
        setLoading(false);
        setBlogData(initialBlogData);
        setOpenDialog(false);
        router.refresh();
      }
    } catch (error) {
      setLoading(false);
      setBlogData(initialBlogData);
    }
  };

  const setInitialFormData = async () => {
    setBlogData({
      title : blog.title,
      description : blog.description
    })
  }
  // if it code is not here also working fine
  useEffect(() => {
    router.refresh();
    setInitialFormData()
  }, [openDialog]);
  return (
    <Fragment>
      <button
        onClick={()=>setOpenDialog(true)}
        className="mr-2 px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 flex items-center justify-center gap-2"
      >
        <Edit size={20} />
        Edit
      </button>
      <Dialog
        open={openDialog}
        onOpenChange={() => {
          setOpenDialog(false);
          setBlogData(initialBlogData);
        }}
      >
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
            <Button
              onClick={() => {
                handleSubmit();
              }}
              type="submit"
            >
              Save changes
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </Fragment>
  );
}

export default UpdateBlog;
