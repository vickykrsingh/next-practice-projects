import connectDB from "@/database/dbConnection";
import blogModel from "@/models/blogModel";
import Joi from "joi";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

const AddNewBlog = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().required(),
});

export async function GET() {
  await connectDB();
  try {
    const blogs = await blogModel.find({}).sort({updatedAt:-1});
    if (blogs) {
      return NextResponse.json({
        success: true,
        data: blogs,
      });
    }
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: error.message || "something went wrong while fetching blog",
    });
  }
}

export async function POST(req) {
  await connectDB();
  const blog = await req.json();
  const { title, description } = blog;
  try {
    const { error } = AddNewBlog.validate({
      title,
      description,
    });
    if (error) {
      return NextResponse.json({
        success: true,
        message: error.message||"Something went wrong",
      });
    }
    const newlyCreatedBlog = blogModel.create({
      title,
      description,
    });
    revalidatePath('/blogs')
    if (newlyCreatedBlog) {
      return NextResponse.json({
        success: true,
        message: "New blog added",
      });
    }
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: error?.message || "Something went wrong",
    });
  }
}

export async function PUT(req) {
  await connectDB();
  const {searchParams} = new URL(req.url)
  const _id = searchParams.get('id');
  const updatedBlogData = await req.json();
  const { title, description } = updatedBlogData;

  try {
    const updatedBlog = await blogModel.findByIdAndUpdate(_id, {
      title,
      description,
    });
    
    if (updatedBlog) {
      return NextResponse.json({
        success: true,
        message: "blog updated successfully.",
      });
    }
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: "something went wrong while updating the blog.",
    });
  }
}

export async function DELETE(req) {
  await connectDB();
  // const _id = await req.json();
  const {searchParams} = new URL(req.url);
  const _id = searchParams.get('id')
  console.log(_id)
  if(!_id){
    return NextResponse.json({
      success:false,
      message:"Invalid Id"
    })
  }

  try {
    const deletedItem = await blogModel.findByIdAndDelete(_id);
    if (deletedItem) {
      return NextResponse.json({
        success: true,
        message: "blog deleted successfully.",
      });
    }
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: error.message || "something went wrong while deleting the blog.",
    });
  }
}
