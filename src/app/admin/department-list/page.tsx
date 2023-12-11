import Search from "@/components/Search";
import DepartmentTable from "@/components/admin/departmentList/DepartmentTable";
import { PlusIcon } from "@heroicons/react/24/outline";
import React from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const page = () => {
  return (
    <div className="flex flex-col h-screen w-full">
      {/* <div>user</div> */}
      <div className="flex items-center justify-between gap-8">
        <Search placeholder="Search" />
        <Dialog>
          <DialogTrigger asChild>
            <Button asChild variant={"secondary"}>
              <div className="flex text-white cursor-pointer hover:text-slate-800 items-center justify-center gap-2">
                <PlusIcon className="w-4 h-4" /> Create Department
              </div>
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[550px]">
            <DialogHeader>
              <DialogTitle>Create Department</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input
                  id="name"
                  defaultValue=""
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="description" className="text-right">
                  Description
                </Label>
                <Textarea
                  id="description"
                  defaultValue=""
                  className="col-span-3"
                />
              </div>
              <div></div>
            </div>
            <DialogFooter>
              <div className="flex gap-4">
                <Button type="submit">Confirm</Button>
              </div>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      <DepartmentTable />
    </div>
  );
};

export default page;
