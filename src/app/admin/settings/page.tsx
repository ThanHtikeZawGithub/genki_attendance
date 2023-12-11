import { Separator } from "@/components/ui/separator";
import React from "react";
import MainSettings from "./MainSettings";
import OrgSettings from "./OrgSettings";
import ThemeSettings from "./ThemeSettings";
import { Button } from "@/components/ui/button";

const page = () => {
  return (
    <div className="flex flex-col gap-5">
      <div>
        <h1 className="text-xl font-normal">Main Settings</h1>
        <MainSettings />
        <Separator />
      </div>
      <div>
        <h1 className="text-xl font-normal">Organization Settings</h1>
        <OrgSettings />
        <Separator />
      </div>
      <div className="grid grid-cols-2">
        <h1 className="text-xl font-normal">Theme Settings</h1>
        <ThemeSettings />
      </div>
      <Button>Confirm</Button>
    </div>
  );
};

export default page;
