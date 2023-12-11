import React from "react";
import SideNav from "@/components/SideNav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-full flex-col md:flex-row">
        <SideNav />
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}
