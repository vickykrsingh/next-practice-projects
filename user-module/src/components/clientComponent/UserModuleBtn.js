"use client";
import React, { Fragment, useContext } from "react";
import { Button } from "../ui/button";
import { initialFormData, userContext } from "@/app/context/userContext";
import { deleteUserAction, editUserAction } from "@/lib/actions";
import toast from "react-hot-toast";

function UserModuleBtn({ user }) {
  const {
    userFormData,
    setUserFormData,
    setIsOpen,
    isOpen,
    setCurrentEditedId,
  } = useContext(userContext);
  const handleDeleteUser = async () => {
    try {
      const result = await deleteUserAction(user._id, "/");
      if (result.success) {
        toast.success(result.message)
      }
    } catch (error) {
    toast.error("something went wrong please try again!");
    }
  };
  return (
    <Fragment>
      <Button
        onClick={() => {
          setCurrentEditedId(user._id);
          setUserFormData({
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            address: user.address,
          });
          setIsOpen(true);
        }}
      >
        Edit
      </Button>
      <Button
        onClick={() => {
          handleDeleteUser();
        }}
      >
        Delete
      </Button>
    </Fragment>
  );
}

export default UserModuleBtn;
