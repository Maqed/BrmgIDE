import { ReactNode } from "react";
import { SidebarInset } from "../ui/sidebar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Editor } from "../programming/editor";
import { EditorSettings } from "@/lib/learn";
import { useTranslations } from "next-intl";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "../ui/resizable";
import Compiler from "../programming/compiler";

function MobileLayout({
  children,
  languageEditorSettings,
  language,
}: {
  children: ReactNode;
  language: string;
  languageEditorSettings?: EditorSettings;
}) {
  const TABS_LIST_HEIGHT = "40px";
  const t = useTranslations("/learn.mobile-tabs");
  const tCompiler = useTranslations("/learn.compiler");

  return (
    <SidebarInset className="flex-row md:hidden">
      <Tabs
        defaultValue="read"
        className="w-full"
        style={
          {
            "--tabs-list-height": TABS_LIST_HEIGHT,
            height: TABS_LIST_HEIGHT,
          } as React.CSSProperties
        }
      >
        <TabsContent value="read">{children}</TabsContent>
        <TabsContent value="editor">
          <ResizablePanelGroup direction="vertical">
            <ResizablePanel defaultSize={75}>
              <div
                dir="ltr"
                className="h-[calc(100svh-var(--nav-height)-var(--tabs-list-height))]!"
              >
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
        </TabsContent>
        <TabsList className="sticky bottom-0 z-50 w-full rounded-none">
          <TabsTrigger value="read">{t("read")}</TabsTrigger>
          <TabsTrigger value="editor">{t("IDE")}</TabsTrigger>
        </TabsList>
      </Tabs>
    </SidebarInset>
  );
}

export default MobileLayout;
