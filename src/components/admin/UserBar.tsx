import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Label } from "../ui/label";

const UserBar = () => {
  return (
    <div className="flex items-center justify-center gap-2">
      <p>Genki Panda</p>
      <Sheet>
        <SheetTrigger>
          <Avatar className="w-9 h-9">
            <AvatarImage
              src="https://avatars.githubusercontent.com/u/125514456?s=400&u=ad3cf474d8c17f3060f1bbcef44b22f685a04692&v=4"
              className="w-12 h-12"
            />
            <AvatarFallback>GP</AvatarFallback>
          </Avatar>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Edit profile</SheetTitle>
          </SheetHeader>
          <div className="grid gap-4 py-4">
            <div className="flex items-center justify-center">
              <Avatar className="w-20 h-20">
                <AvatarImage
                  src="https://avatars.githubusercontent.com/u/125514456?s=400&u=ad3cf474d8c17f3060f1bbcef44b22f685a04692&v=4"
                  className="w-24 h-24"
                />
                <AvatarFallback>GP</AvatarFallback>
              </Avatar>
            </div>
            <div className="flex flex-col justify-start items-start gap-1">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input
                id="name"
                placeholder="Display name"
                className="col-span-3"
              />
            </div>
            <div className="flex flex-col justify-start items-start gap-1">
              <Label htmlFor="username" className="text-right">
                Username
              </Label>
              <Input
                id="username"
                placeholder="Account username"
                className="col-span-3"
              />
            </div>
            <h1>Change Password</h1>
            <div className="flex flex-col justify-start items-start gap-1">
              <Label htmlFor="name" className="text-right">
                Enter old password
              </Label>
              <Input
                id="oldPassword"
                placeholder="Old Password"
                className="col-span-3"
              />
            </div>
            <div className="flex flex-col justify-start items-start gap-1">
              <Label htmlFor="name" className="text-right">
                Enter new password
              </Label>
              <Input
                id="newPassword"
                placeholder="New Password"
                className="col-span-3"
              />
            </div>
            <div className="flex flex-col justify-start items-start gap-1">
              <Label htmlFor="name" className="text-right">
                Re-enter new password
              </Label>
              <Input
                id="confirmPassword"
                placeholder="New Password"
                className="col-span-3"
              />
            </div>
          </div>
          <SheetFooter>
            <SheetClose asChild>
              <Button type="submit">Confirm</Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default UserBar;
