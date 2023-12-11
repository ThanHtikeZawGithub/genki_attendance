import Search from "@/components/Search";
import EmployeeTable from "@/components/admin/employeeList/EmployeeTable";
import Manual from "@/components/admin/employeeList/Manual";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col h-screen w-full">
      {/* <div>user</div> */}
      <div className="flex items-center justify-between gap-8">
        <Search placeholder="Search" />
        <Button asChild variant={'secondary'}>
          <Link href="/admin/employee-list/create" className="flex text-white hover:text-slate-800 items-center justify-center gap-2">
            <PlusIcon className="w-4 h-4"/> Create Employee
          </Link>
        </Button>
        <Manual />
      </div>
      <EmployeeTable />
    </div>
  );
};

export default page;
