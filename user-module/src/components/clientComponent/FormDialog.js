"use client";
import { initialFormData, userContext } from "@/app/context/userContext";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { formElement } from "@/lib/CommonFormData";
import {
  addNewUserAction,
  deleteUserAction,
  editUserAction,
} from "@/lib/actions";
import { useContext, useState } from "react";
import toast from "react-hot-toast";

export function FormDialog() {
  const {
    isOpen,
    setIsOpen,
    currentEditedId,
    setCurrentEditedId,
    userFormData,
    setUserFormData,
  } = useContext(userContext);
  async function handleAddNewUser() {
    try {
      const result = currentEditedId
        ? await editUserAction(currentEditedId, userFormData, "/")
        : await addNewUserAction(userFormData, "/");
      if (result.success) {
        setUserFormData(initialFormData);
        setIsOpen(false);
        toast.success(result.message)
      } else {
        setUserFormData(initialFormData);
        setIsOpen(false);
        toast.error(result.message)
      }
      setCurrentEditedId(null);
    } catch (error) {
      setIsOpen(false);
      setCurrentEditedId(null);
      toast.error("something went wrong please try again !")
    }
  }
  return (
    <Dialog
      open={isOpen}
      onOpenChange={() => {
        setIsOpen(false);
      }}
    >
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add New User</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <form action={handleAddNewUser} className="flex flex-col gap-4">
          {formElement.map((element) => (
            <div key={element.id} className="flex flex-col gap-2 items-start">
              <Label htmlFor={element.name} className="text-right">
                {element.label}
              </Label>
              <Input
                id={element.id}
                value={userFormData[element.name]}
                onChange={(e) =>
                  setUserFormData({
                    ...userFormData,
                    [element.name]: e.target.value,
                  })
                }
                className="col-span-3"
              />
            </div>
          ))}
          <Button type="submit">Save changes</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
