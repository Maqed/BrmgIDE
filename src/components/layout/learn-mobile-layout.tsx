import { ReactNode } from "react";
import { SidebarInset } from "../ui/sidebar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useTranslations } from "next-intl";
import IDECompilerLayout from "./ide-compiler-layout";
import { SupportedLanguages } from "@/lib/learn";

function MobileLayout({
  children,
  language,
}: {
  children: ReactNode;
  language: SupportedLanguages;
}) {
  const TABS_LIST_HEIGHT = "40px";
  const t = useTranslations("/learn.mobile-tabs");
  const tCompiler = useTranslations("compiler");

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
            view="mobile"
            translation={{
              pressRun: tCompiler("press-run"),
              run: tCompiler("run"),
            }}
          />
        </TabsContent>
        <TabsList className="sticky bottom-0 z-50 w-full rounded-none h-(--tabs-list-height) p-0">
          <TabsTrigger
            className="h-(--tabs-list-height) rounded-none"
            value="read"
          >
            {t("read")}
          </TabsTrigger>
          <TabsTrigger
            className="h-(--tabs-list-height) rounded-none"
            value="editor"
          >
            {t("IDE")}
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </SidebarInset>
  );
}

export default MobileLayout;
