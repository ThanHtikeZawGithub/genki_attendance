'use client';

import {
  UserGroupIcon,
  TicketIcon,
  BuildingOfficeIcon,
  HomeIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

//name of the side navigation list
const links = [
  { 
    name: 'Dashboard', 
    href:'/admin', 
    icon: HomeIcon
  },
  { 
    name: 'Employee List', 
    href: '/admin/employee-list', 
    icon: BuildingOfficeIcon 
  },
  {
    name: 'Department List',
    href: '/admin/department-list',
    icon: UserGroupIcon,
  },
  { name: 'Settings', 
    href: '/admin/settings', 
    icon: TicketIcon 
  }
];

//active style can be changed,for now I just put some random style

export default function NavLinks() {
  //we will get the navigation from the params which is pathname
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx("flex h-[48px] grow items-center justify-center gap-2 rounded-md p-3 text-sm font-medium md:flex-none md:justify-start md:p-2 md:px-3",
            {
              'bg-sky-100 text-blue-600' : pathname === link.href,
            },
            )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
