"use client";
import Logo from "@/components/brand/logo";
import { Button } from "../ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";
import { createPortal } from "react-dom";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import ChooseLocale from "../i18n/choose-locale";
import { ThemeToggle } from "./theme-toggle";
import { Menu, X } from "lucide-react";
import { LANGUAGES, LanguageType } from "@/lib/learn";

export function Nav({ StartComponent }: { StartComponent?: ReactNode }) {
  const [open, setOpen] = React.useState(false);
  const t = useTranslations("nav.learn");

  return (
    <header
      className={cn("sticky top-0 z-50 w-full border-b border-border bg-nav")}
    >
      <nav className="mx-auto flex h-(--nav-height) w-full items-center justify-between px-4">
        <div className="flex items-center gap-5">
          {StartComponent}
          <Link className="rounded-md p-2 hover:bg-accent" href="/">
            <Logo />
          </Link>
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent">
                  {t("title")}
                </NavigationMenuTrigger>
                <NavigationMenuContent className="bg-muted/50 p-1 pr-1.5 dark:bg-nav">
                  <ul className="grid w-lg grid-cols-2 gap-2 rounded-md border bg-popover p-2 shadow">
                    {LANGUAGES.map((language) => (
                      <ListItem
                        {...language}
                        key={`desktop-language-${language.id}`}
                      />
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="flex items-center gap-5">
          <ThemeToggle />
          <ChooseLocale />
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
        </div>
      </nav>
      <MobileMenu open={open}>
        <NavigationMenu className="max-w-full">
          <div className="flex w-full flex-col gap-y-2">
            <span className="text-sm">{t("title")}</span>
            {LANGUAGES.map((language) => (
              <ListItem key={`nav-mobile-${language.id}`} {...language} />
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
        "fixed bg-nav/95 top-14 right-0 bottom-0 left-0 z-40 flex flex-col overflow-hidden border-y md:hidden"
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
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuLink> & LanguageType) {
  const { name: languageName, id: languageId, icon: Icon } = props;
  const t = useTranslations(`languages.${languageId}`);
  return (
    <NavigationMenuLink
      className={cn("w-full flex-row gap-x-2", className)}
      {...props}
      asChild
    >
      <Link href={`/learn/${languageId}/introduction`}>
        <div className="flex aspect-square size-12 items-center justify-center rounded-md border bg-nav/40 shadow-sm">
          <Icon className="size-5 text-foreground" />
        </div>
        <div className="flex flex-col items-start justify-center">
          <span className="font-medium">{languageName}</span>
          <span className="text-muted-foreground text-xs">
            {t("description")}
          </span>
        </div>
      </Link>
    </NavigationMenuLink>
  );
}
