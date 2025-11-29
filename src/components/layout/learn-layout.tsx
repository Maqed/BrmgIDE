import type { ReactNode } from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import LearnSidebar from "./learn-sidebar";
import { Nav } from "./nav";
import { getLanguageById } from "@/lib/learn";
import DesktopLayout from "./learn-desktop-layout";
import MobileLayout from "./learn-mobile-layout";

function LearnLayout({
  children,
  language,
}: {
  children: ReactNode;
  language: string;
}) {
  return (
    <SidebarProvider className="flex flex-col">
      <Nav StartComponent={<SidebarTrigger />} />
      <div className="flex">
        <LearnSidebar language={language} />
        <DesktopLayout language={language}>{children}</DesktopLayout>
        <MobileLayout language={language}>{children}</MobileLayout>
      </div>
    </SidebarProvider>
  );
}

export default LearnLayout;
