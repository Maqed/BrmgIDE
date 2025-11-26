import { ReactNode } from "react";
import { SidebarInset, SidebarProvider } from "../ui/sidebar";
import LearnSidebar from "./learn-sidebar";

function LearnLayout({
  children,
  shouldShowSidebar,
}: {
  children: ReactNode;
  shouldShowSidebar: boolean;
}) {
  if (!shouldShowSidebar) {
    return children;
  }
  return (
    <SidebarProvider className="flex flex-col">
      <div className="flex flex-1">
        <LearnSidebar />
        <SidebarInset>{children}</SidebarInset>
      </div>
    </SidebarProvider>
  );
}

export default LearnLayout;
