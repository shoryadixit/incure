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
import { cn } from "@/lib/utils";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./new-nav";
import { useEffect, useState } from "react";
import { Dot, MenuIcon } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function Navbar() {
  const [active, setActive] = useState(null);
  const navItems = [
    {
      title: "Pain Relief",
      href: "#",
      children: [
        { title: "Headache & Migraine Relief", href: "#" },
        { title: "Muscle & Joint Pain", href: "#" },
        { title: "Back Pain", href: "#" },
        { title: "Nerve Pain", href: "#" },
        { title: "Arthritis & Inflammation", href: "#" },
      ],
    },
    {
      title: "Digestive Health",
      href: "#",
      children: [
        { title: "Acidity & Heartburn Relief", href: "#" },
        { title: "Constipation Relief", href: "#" },
        { title: "Diarrhea Control", href: "#" },
        { title: "Gas & Bloating Relief", href: "#" },
        { title: "Indigestion & Stomach Pain", href: "#" },
        { title: "Nausea & Vomiting", href: "#" },
        { title: "Gallstone Dissolution", href: "#" },
        { title: "Irritable Bowel Syndrome ", href: "#" },
        { title: "Fast Acting", href: "#" },
      ],
    },
    {
      title: "Cold & Flu",
      href: "#",
      children: [
        { title: "Fever & Body Aches Relief", href: "#" },
        { title: "Stuffy Nose & Nasal Congestion", href: "#" },
        { title: "Runny Nose & Sneezing", href: "#" },
        { title: "Cough Relief", href: "#" },
        { title: "Sore Throat", href: "#" },
        { title: "Quick Relief ", href: "#" },
      ],
    },
    {
      title: "Vitamins & Supplements",
      href: "#",
      children: [
        { title: "Multivitamins ", href: "#" },
        { title: "Energy & Vitality", href: "#" },
        { title: "Brain & Cognitive Function", href: "#" },
        { title: "Digestive Health", href: "#" },
        { title: "Heart Health", href: "#" },
        { title: "Immune Support", href: "#" },
        { title: "Bone & Joint Health", href: "#" },
        { title: "Stress & Relaxation", href: "#" },
      ],
    },
    {
      title: "Allergy Relief",
      href: "#",
    },
    {
      title: "Sexual Wellness",
      href: "#",
    },
    {
      title: "Surgical Equipment",
      href: "#",
    },
  ];

  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed w-full flex gap-5 sm:gap-0 items-center justify-between p-4 z-50 transition-all ease-in-out duration-500 ${
        isScrolled ? "bg-primary-foreground" : ""
      }`}
    >
      <div className="text-xl font-bold flex items-center space-x-1 text-primary underline underline-offset-4">
        <BsCapsulePill className="drop-shadow-2xl" />
        <span>INcure</span>
      </div>

      <div className="flex items-start sm:items-center space-x-4">
        {/* <NavigationMenuItems /> */}
        <div className={cn("top-0 inset-x-0 mx-auto z-50 hidden md:block")}>
          <Menu setActive={setActive}>
            {navItems.map((item, index) => (
              <MenuItem
                key={index}
                setActive={setActive}
                active={active}
                isChildren={item.children || false}
                item={item.title}
              >
                <div className="flex flex-col space-y-1 text-sm">
                  {item?.children?.map((child, index) => (
                    <HoveredLink
                      key={index}
                      href={child.href}
                      className="hover:text-white"
                    >
                      {child.title}
                    </HoveredLink>
                  ))}
                </div>
              </MenuItem>
            ))}
          </Menu>
        </div>
      </div>

      <div className="space-x-2">
        {/* <ModeToggle /> */}
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant={"secondary"}>
                <BsWhatsapp />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Order Now</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant={"secondary"} className="md:hidden">
              <span className="sr-only">Open menu</span>
              <MenuIcon />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>
                <div className="text-xl font-bold flex items-center space-x-1 text-primary underline underline-offset-4">
                  <BsCapsulePill className="drop-shadow-2xl" />
                  <span>INcure</span>
                </div>
              </SheetTitle>
              <SheetDescription>This action cannot be undone.</SheetDescription>
              <div>
                {navItems.map((item, index) => (
                  <div key={index} className="space-y-2">
                    <Button
                      variant="ghost"
                      className="w-full justify-between"
                      onClick={() => setActive(active === index ? null : index)}
                    >
                      <span>{item.title}</span>
                      {item.children &&
                        (active === index ? (
                          <ChevronUp className="h-4 w-4" />
                        ) : (
                          <ChevronDown className="h-4 w-4" />
                        ))}
                    </Button>
                    {item.children && active === index && (
                      <div className="ml-4 flex flex-col space-y-2">
                        {item.children.map((child, childIndex) => (
                          <Button
                            key={childIndex}
                            variant="ghost"
                            className="w-full justify-start"
                            asChild
                          >
                            <a href={child.href}>{child.title}</a>
                          </Button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
