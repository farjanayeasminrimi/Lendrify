import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "@/assets/Logo.png";
import NavLink from "./NavLink";
import { IoHomeOutline } from "react-icons/io5";
import { LiaSwatchbookSolid } from "react-icons/lia";
import { ImProfile } from "react-icons/im";
import LoginButtons from "./LoginButtons";

const Navbar = () => {
  return (
    <div className="bg-[#e4e1dd] px-2 md:px-0 sticky top-0 z-10 shadow-sm">
      <div className="navbar container mx-auto  ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden pl-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <NavLink href={"/"}>
                <IoHomeOutline /> Home
              </NavLink>
              <NavLink href={"/allbooks"}>
                <LiaSwatchbookSolid /> All Books
              </NavLink>
              <NavLink href={"/myprofile"}>
                <ImProfile /> My Profile
              </NavLink>
            </ul>
          </div>
          <div>
            <Link href={"/"}>
              <Image src={logo} width={150} height={30} alt="logo"></Image>
            </Link>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex gap-6 justify-between items-center">
            <NavLink href={"/"}>
              <IoHomeOutline /> Home
            </NavLink>
            <NavLink href={"/allbooks"}>
              <LiaSwatchbookSolid /> All Books
            </NavLink>
            <NavLink href={"/myprofile"}>
              <ImProfile /> My Profile
            </NavLink>
          </ul>
        </div>
        <div className="navbar-end ">
          <LoginButtons></LoginButtons>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
