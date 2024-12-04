"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

interface NavItemProps {
  icon: ReactNode;
  path: string;
}

const NavItem = ({ icon, path }: NavItemProps) => {
  const pathName = usePathname();
  const basePath = path.replace("[id]", "");
  const regex = new RegExp(`^${basePath}(\\d+)?$`);
  const isActive = regex.test(pathName);

  return (
    <Link href={path.replace("[id]", "1")} className="w-full flex justify-center">
      <span className={isActive ? "bg-orange-400 w-10/12 flex justify-center rounded-md transition-colors" : "w-10/12 py-2"}>
        {icon}
      </span>
    </Link>
  );
};

export default NavItem;