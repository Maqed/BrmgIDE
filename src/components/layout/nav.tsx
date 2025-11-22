"use client";
import Logo from "@/components/brand/logo";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import React from "react";
import { createPortal } from "react-dom";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import PythonIcon from "../icons/python";
import NodejsIcon from "../icons/nodejs";

type LinkItem = {
  title: string;
  href: string;
  icon: React.ComponentType<React.ComponentProps<"svg">>;
  description?: string;
};

export function Nav() {
  const [open, setOpen] = React.useState(false);
  const t = useTranslations("nav.learn");

  React.useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full  border-b border-border bg-background/95 backdrop-blur-lg supports-[backdrop-filter]:bg-background/50"
      )}
    >
      <nav className="mx-auto flex h-14 w-full items-center justify-between px-4">
        <div className="flex items-center gap-5">
          <Link className="rounded-md p-2 hover:bg-accent" href="/">
            <Logo />
          </Link>
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent">
                  {t("title")}
                </NavigationMenuTrigger>
                <NavigationMenuContent className="bg-muted/50 p-1 pr-1.5 dark:bg-background">
                  <ul className="grid w-lg grid-cols-2 gap-2 rounded-md border bg-popover p-2 shadow">
                    {learnLinks(t).map((item, i) => (
                      <li key={i}>
                        <ListItem {...item} />
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <Button
          aria-controls="mobile-menu"
          aria-expanded={open}
          aria-label="Toggle menu"
          className="md:hidden"
          onClick={() => setOpen(!open)}
          size="icon"
          variant="outline"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </Button>
      </nav>
      <MobileMenu open={open}>
        <NavigationMenu className="max-w-full">
          <div className="flex w-full flex-col gap-y-2">
            <span className="text-sm">{t("title")}</span>
            {learnLinks(t).map((link) => (
              <ListItem key={link.title} {...link} />
            ))}
          </div>
        </NavigationMenu>
      </MobileMenu>
    </header>
  );
}

type MobileMenuProps = React.ComponentProps<"div"> & {
  open: boolean;
};

function MobileMenu({ open, children, className, ...props }: MobileMenuProps) {
  if (!open || typeof window === "undefined") {
    return null;
  }

  return createPortal(
    <div
      className={cn(
        "bg-background/95 backdrop-blur-lg supports-[backdrop-filter]:bg-background/50",
        "fixed top-14 right-0 bottom-0 left-0 z-40 flex flex-col overflow-hidden border-y md:hidden"
      )}
      id="mobile-menu"
    >
      <div
        className={cn(
          "data-[slot=open]:zoom-in-97 ease-out data-[slot=open]:animate-in",
          "size-full p-4",
          className
        )}
        data-slot={open ? "open" : "closed"}
        {...props}
      >
        {children}
      </div>
    </div>,
    document.body
  );
}

function ListItem({
  title,
  description,
  icon: Icon,
  className,
  href,
  ...props
}: React.ComponentProps<typeof NavigationMenuLink> & LinkItem) {
  return (
    <NavigationMenuLink
      className={cn("w-full flex-row gap-x-2", className)}
      {...props}
      asChild
    >
      <Link href={href}>
        <div className="flex aspect-square size-12 items-center justify-center rounded-md border bg-background/40 shadow-sm">
          <Icon className="size-5 text-foreground" />
        </div>
        <div className="flex flex-col items-start justify-center">
          <span className="font-medium">{title}</span>
          <span className="text-muted-foreground text-xs">{description}</span>
        </div>
      </Link>
    </NavigationMenuLink>
  );
}

const learnLinks = (t: ReturnType<typeof useTranslations>): LinkItem[] => [
  {
    title: "Python",
    href: "/learn/python",
    description: t("python.description"),
    icon: PythonIcon,
  },
  {
    title: "Node.js",
    href: "/learn/nodejs",
    description: t("nodejs.description"),
    icon: NodejsIcon,
  },
];
