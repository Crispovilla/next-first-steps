import { HomeIcon } from "@primer/octicons-react";
import Link from "next/link";
import React from "react";
import { ActiveLink } from "../active-link/ActiveLink";

const navItems = [
  { path: "/about", text: "About" },
  { path: "/pricing", text: "Pricing" },
  { path: "/contact", text: "Contact" },
];
export const Navbar = () => {
  return (
    <nav className="flex bg-blue-900 bg-opacity p-2 m-2 rounded">
      <Link href={"/"}>
        <HomeIcon size={16} />
        <span className="ml-2">Home</span>
      </Link>
      <div className="flex-1"></div>

      {navItems.map((navItem) => (
        <ActiveLink key={navItem.path} {...navItem} />
      ))}
    </nav>
  );
};
