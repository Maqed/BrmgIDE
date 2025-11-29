import { ReactNode } from "react";
import { SidebarInset } from "../ui/sidebar";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "../ui/resizable";
import { useTranslations } from "next-intl";
import IDECompilerLayout from "./ide-compiler-layout";

function DesktopLayout({
  children,
  language,
}: {
  children: ReactNode;
  language: string;
}) {
  const tCompiler = useTranslations("/learn.compiler");
  return (
    <SidebarInset
      className="flex-row max-md:hidden"
      openAndNotMobileClassName="max-w-[calc(100vw-var(--sidebar-width))]"
    >
      <ResizablePanelGroup
        className="h-[calc(100svh-var(--nav-height)-1px)]!"
        direction="horizontal"
      >
        <ResizablePanel>
          <div className="h-full overflow-y-auto scrollbar-thin">
            {children}
          </div>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel>
          <IDECompilerLayout
            language={language}
            view="desktop"
            translation={{
              pressRun: tCompiler("press-run"),
              run: tCompiler("run"),
            }}
          />
        </ResizablePanel>
      </ResizablePanelGroup>
    </SidebarInset>
  );
}

export default DesktopLayout;
