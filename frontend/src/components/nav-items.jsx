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
    title: "Pain Relief",
    href:"#",
    children:
    [
      {title: "Headache & Migraine Relief", href:"#"},
      {title: "Muscle & Joint Pain", href:"#"},
      {title: "Back Pain", href:"#"},
      {title: "Nerve Pain", href:"#"},
      {title: "Arthritis & Inflammation", href:"#"},
    ]
  },
  {
    title: "Digestive Health",
    href:"#",
    children:
    [
      {title:"Acidity & Heartburn Relief", href:"#"},
      {title:"Constipation Relief", href:"#"},
      {title:"Diarrhea Control", href:"#"},
      {title:"Gas & Bloating Relief", href:"#"},
      {title:"Indigestion & Stomach Pain", href:"#"},
      {title:"Nausea & Vomiting", href:"#"},
      {title:"Gallstone Dissolution", href:"#"},
      {title:"Irritable Bowel Syndrome ", href:"#"},
      {title:"Fast Acting", href:"#"},

    ]
  },
  {
    title: "Cold & Flu",
    href:"#",
  },
  {
    title: "Vitamins & Supplements",
    href:"#",
  },
  {
    title: "Allergy Relief",
    href:"#",
  },
  {
    title: "Sexual Wellness",
    href:"#",
  }, 
  {
    title: "Surgical Equipment",
    href:"#",
  }
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
            <NavigationMenuItem  key={index}>
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
