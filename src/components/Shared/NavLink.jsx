"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLink = ({ href, children }) => {
  const pathName = usePathname();
  const isActiveLink = pathName === href;
  return (
    <Link
      className={`text-[#2F3A3D] hover:text-[#7C8F8A] font-medium text-[15px] ${isActiveLink && "text-[#4C5E64] px-2 border-b-3 rounded-sm border-b-[#7C8F8A]"}`}
      href={href}
    >
      {children}
    </Link>
  );
};

export default NavLink;
