import { Logo } from "./logo"
import { SidebarRoutes } from "./sidebar-routes"

import Link from "next/link";
import Image from "next/image";
export const Sidebar = () => {
  return (
    <div className="h-full border-r flex flex-col overflow-y-auto  shadow-sm">
      <div className="p-6">
        <Link href="/">
        <Image
      height={130}
      width={130}
      alt="logo"
      src="/EDUQUIC1.png"
      className="dark:hidden"
    />
      <Image
      height={130}
      width={130}
      alt="logo"
      className="hidden dark:block"
      src="/EDUQUICDARK1.png"
     
    />
        </Link>
      </div>
      
      <div className="flex flex-col w-full">
      
        <SidebarRoutes />
      </div>
     
    </div>
  )
}







