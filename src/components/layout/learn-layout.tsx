import { ReactNode } from "react";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "../ui/sidebar";
import LearnSidebar from "./learn-sidebar";
import { Nav } from "./nav";

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
      <div className="flex flex-1">
        <LearnSidebar language={language} />
        <SidebarInset>{children}</SidebarInset>
      </div>
    </SidebarProvider>
  );
}

export default LearnLayout;
