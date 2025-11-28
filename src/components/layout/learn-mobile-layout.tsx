import { ReactNode } from "react";
import { SidebarInset } from "../ui/sidebar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { EditorSettings } from "@/lib/learn";
import { useTranslations } from "next-intl";
import IDECompilerLayout from "./ide-compiler-layout";

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
          <IDECompilerLayout
            language={language}
            languageEditorSettings={languageEditorSettings}
            view="mobile"
            translation={{
              output: tCompiler("output"),
              pressRun: tCompiler("press-run"),
              run: tCompiler("run"),
            }}
          />
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
