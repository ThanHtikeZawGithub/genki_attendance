"use client";
import Link from "next/link";
import NavLinks from "./admin/NavLinks";
import {
  ArrowRightOnRectangleIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { Separator } from "./ui/separator";
import { useState } from "react";
import clsx from "clsx";
import UserBar from "./admin/UserBar";

export default function SideNav() {
  const [close, setClose] = useState<boolean | null>(false);
  return (
    <aside className={clsx("w-full flex-none md:w-64 transition-all duration-200",
    {"md:w-16 transition-all duration-200": close}
    )}>
    <div className="flex h-full flex-col px-3 py-4 md:px-2 bg-primary text-white">
      <div
        className={clsx("fixed top-0 right-8 left-64 text-black transition-all duration-200", 
        {
          "left-16 transition-all duration-200": close,
        })}
      >
        <div className="flex items-center justify-between p-1">
          <button onClick={() => setClose((prev) => !prev)}>
            <XMarkIcon className="w-6 h-6" />
          </button>
          <UserBar/>
        </div>
        <Separator className=""/>
      </div>
      <Link
        className="mb-2 flex h-10 items-center justify-center p-4 md:h-20"
        href="/"
      >
        <div className={clsx("w-32 text-white md:w-40")}>Logo</div>
      </Link>
      <Separator />
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col mt-4 md:space-x-0 md:space-y-2">
        <NavLinks close={close}/>
        <div className="hidden h-auto w-full grow rounded-md md:block"></div>
        <form>
          <button className="flex h-[48px] grow items-center justify-center gap-2 rounded-md p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-500 md:flex-none md:justify-start md:p-2 md:px-3">
            <ArrowRightOnRectangleIcon className="w-6" />
          <div className={clsx("hidden md:block",
          {"md:hidden" : close}
          )}>
            Log Out
            </div>
          </button>
        </form>
      </div>
    </div>
    </aside>
  );
}
