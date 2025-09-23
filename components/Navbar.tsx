import React from "react";
import { ModeToggle } from "./DarkMode";
import { UserMenu } from "./UserMenu";
import Link from "next/link";
import JournalItem from "./JournalItem";

interface NavContent {
  itemName: string;
  hrefLink: string;
}

function NavItem({ itemName, hrefLink }: NavContent) {
  return (
    <Link
      href={`/${hrefLink}`}
      className="text-xs text-foreground opacity-80 hover:opacity-100 dark:text-white"
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
    <nav
      className="flex items-center justify-between h-[36px] py-2
                bg-foreground/10 backdrop-blur-xl border border-white/20
                rounded-2xl shadow-lg px-12"
    >
      {NavData.map((item, i) => (
        <NavItem key={i} itemName={item.itemName} hrefLink={item.hrefLink} />
      ))}
      <div className="border-white/80 w-1/3 pl-8 flex gap-4 justify-around">
        <ModeToggle />
        <JournalItem />
        <UserMenu />
      </div>
    </nav>
  );
}

export default Navbar;
