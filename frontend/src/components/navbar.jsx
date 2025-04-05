"use client";

import { NavigationMenuItems } from "./nav-items";
import { ModeToggle } from "./theme-toggle";
import { BsCapsulePill, BsWhatsapp } from "react-icons/bs";
import { Button } from "./ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4">
      <div className="text-xl font-bold flex items-center space-x-1 text-primary underline underline-offset-4">
        <BsCapsulePill className="drop-shadow-2xl" />
        <span>inCure</span>
      </div>
      <div className="flex items-center space-x-4">
        <NavigationMenuItems />
      </div>
      <div className="space-x-2">
        <ModeToggle />
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant={"secondary"}>
                <BsWhatsapp />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Add to library</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </nav>
  );
}
