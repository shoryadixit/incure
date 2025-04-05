"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const navItems = [
  {
    title: "Medicine",
    href: "#medicines",
    children: [
      {
        title: "Pain relief",
        href: "#",
      },
      {
        title: "Cold & Flu",
        href: "#",
      },
      {
        title: "Digestive Health",
      },
      {
        title: "Allergy Relief",
        href: "#",
      },
      {
        title:"Skin Care",
        href: "#",
      },
      {
        title:"Vitamins & Supplement",
        href: "#",
      },
      
    ],
  },
  // {title: }
];

export function NavigationMenuItems() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {navItems.map((item, index) =>
          item.children ? (
            <NavigationMenuItem key={index}>
              <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="w-[350px] grid gap-3 p-4 md:grid-cols-2">
                  {Array.isArray(item.children)
                    ? item?.children.map((component) => (
                        <ListItem
                          key={component.title}
                          title={component.title}
                          href={component.href}
                        >
                          {component.description}
                        </ListItem>
                      ))
                    : null}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          ) : (
            <NavigationMenuItem>
              <Link href={item.href} legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  {item.title}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          )
        )}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = ({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
};

ListItem.displayName = "ListItem";
