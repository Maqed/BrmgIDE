"use client";

import * as React from "react";

import { Sidebar, SidebarContent } from "@/components/ui/sidebar";
import { useLocale } from "next-intl";
import { isRtlLang } from "rtl-detect";

export default function LearnSidebar({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  const locale = useLocale();
  return (
    <Sidebar
      className="top-(--nav-height) h-[calc(100svh-var(--nav-height))]!"
      side={isRtlLang(locale) ? "right" : "left"}
      {...props}
    >
      <SidebarContent></SidebarContent>
    </Sidebar>
  );
}
