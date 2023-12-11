import Search from "@/components/Search";
import EmployeeTable from "@/components/admin/employeeList/EmployeeTable";
import { DatePicker } from "@/components/ui/date-picker";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col h-screen w-full">
      {/* <div>user</div> */}
      <div className="flex items-center justify-between gap-8">
        <Search placeholder="Search" />
        <div className="flex items-center justify-center">
            <p>Selected Date:</p>
            {/* <DatePicker /> */}
        </div>
      </div>
      <EmployeeTable />
    </div>
  );
};

export default page;
