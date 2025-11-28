import { ReactNode } from "react";
import { SidebarInset } from "../ui/sidebar";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "../ui/resizable";
import { Editor } from "../programming/editor";
import { EditorSettings } from "@/lib/learn";
import Compiler from "../programming/compiler";
import { useTranslations } from "next-intl";

function DesktopLayout({
  children,
  languageEditorSettings,
  language,
}: {
  children: ReactNode;
  language: string;
  languageEditorSettings?: EditorSettings;
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
          <ResizablePanelGroup direction="vertical">
            <ResizablePanel defaultSize={75}>
              <div dir="ltr" className="h-[calc(100svh-var(--nav-height))]!">
                <Editor
                  defaultLanguage={languageEditorSettings?.language ?? language}
                  defaultValue={languageEditorSettings?.comment ?? ""}
                />
              </div>
            </ResizablePanel>
            <ResizableHandle />
            <ResizablePanel defaultSize={25}>
              <Compiler
                translation={{
                  output: tCompiler("output"),
                  run: tCompiler("run"),
                  pressRun: tCompiler("press-run"),
                }}
                language={language}
              />
            </ResizablePanel>
          </ResizablePanelGroup>
        </ResizablePanel>
      </ResizablePanelGroup>
    </SidebarInset>
  );
}

export default DesktopLayout;
