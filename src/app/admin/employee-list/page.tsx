import Search from "@/components/Search";
import EmployeeTable from "@/components/admin/employeeList/EmployeeTable";
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
        <div>filter</div>
        <Button asChild>
          <Link href="/admin/employee-list/create" className="flex items-center justify-center gap-2">
            <PlusIcon className="w-4 h-4"/> Create Employee
          </Link>
        </Button>
        <div>Manual</div>
      </div>
      <EmployeeTable />
    </div>
  );
};

export default page;
