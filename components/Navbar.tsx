import React from "react";
import { ModeToggle } from "./DarkMode";
import Link from "next/link";
import { Item } from "@radix-ui/react-dropdown-menu";

interface NavContent {
  itemName: string;
  hrefLink: string;
}

function NavItem({ itemName, hrefLink }: NavContent) {
  return (
    <Link
      href={`/${hrefLink}`}
      className="text-xs text-white opacity-80 hover:opacity-100 "
    >
      {itemName}
    </Link>
  );
}

const NavData: NavContent[] = [
  { itemName: "Home", hrefLink: "" },
  { itemName: "About", hrefLink: "about" },
  { itemName: "Contact", hrefLink: "contact" },
];

function Navbar() {
  return (
    <nav className="border flex flex-row items-center justify-around gap-4 py-2 h-[36px] bg-black text-zinc-400 rounded-xl">
      {NavData.map((item, i) => (
        <NavItem key={i} itemName={item.itemName} hrefLink={item.hrefLink} />
      ))}
      <ModeToggle />
    </nav>
  );
}

export default Navbar;
