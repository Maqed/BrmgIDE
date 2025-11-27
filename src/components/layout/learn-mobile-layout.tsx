import { ReactNode } from "react";
import { SidebarInset } from "../ui/sidebar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Editor } from "../ui/editor";
import { EditorSettings } from "@/lib/learn";
import { useTranslations } from "next-intl";

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
          <div
            dir="ltr"
            className="h-[calc(100svh-var(--nav-height)-var(--tabs-list-height))]!"
          >
            <Editor
              defaultLanguage={languageEditorSettings?.language ?? language}
              defaultValue={languageEditorSettings?.comment ?? ""}
            />
          </div>
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
