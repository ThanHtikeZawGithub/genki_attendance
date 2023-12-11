
import React from 'react'
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
  } from "@/components/ui/sheet"
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { Label } from '../ui/label';
  

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
          <SheetDescription>
            Make changes to your admin profile here.
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" placeholder="Display name" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input id="username" placeholder="Account username" className="col-span-3" />
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Save changes</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
</Sheet>

    </div>
  );
};

export default UserBar