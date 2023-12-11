import { Input } from "@/components/ui/input";
import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

const MainSettings = () => {
  return (
    <div className="flex flex-col gap-5 pt-8 pb-2 px-10">
      <div className="grid grid-cols-2">
        <p>Set default Check In/Out time</p>
        <div className="flex items-center gap-4">
          <div className="flex items-center justify-center gap-2">
            <p>Check In</p>
            <Input placeholder="9:00" className="h-auto w-20" />
          </div>
          <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
          <div className="flex items-center justify-center gap-2">
            <p>Check Out</p>
            <Input placeholder="18:00" className="h-auto w-20" />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2">
        <p>Set Leave Types</p>
        <div className="flex items-center justify-start gap-4">
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="See Leave Types" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="medical_leave">Medical leave</SelectItem>
              <SelectItem value="casual_leave">Casual leave</SelectItem>
              <SelectItem value="full_day">Full day leave</SelectItem>
            </SelectContent>
          </Select>
          <Button>Add</Button>
        </div>
      </div>
      <div>
        Set Public Holidays
      </div>
    </div>
  );
};

export default MainSettings;
