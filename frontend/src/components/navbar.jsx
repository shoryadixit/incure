"use client";

import { NavigationMenuItems } from "./nav-items";
import { ModeToggle } from "./theme-toggle";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4">
      <div className="text-lg font-bold">My App</div>
      <div className="flex items-center space-x-4">
        <NavigationMenuItems />
      </div>
      <div>
        <ModeToggle />
      </div>
    </nav>
  );
}
