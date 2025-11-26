import * as React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { useLocale, useTranslations } from "next-intl";
import { isRtlLang } from "rtl-detect";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronsUpDown } from "lucide-react";
import { getLanguageById, getLanguageContent, LANGUAGES } from "@/lib/learn";
import { Link } from "@/i18n/navigation";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../ui/collapsible";
import { ForwardChevron } from "../ui/chevrons";

export default function LearnSidebar({
  language,
  ...props
}: React.ComponentProps<typeof Sidebar> & {
  language: string;
}) {
  const locale = useLocale();
  const tLanguage = useTranslations(`languages.${language}.content`);
  const languageContent = getLanguageContent(language);
  return (
    <Sidebar
      className="top-(--nav-height) h-[calc(100svh-var(--nav-height))]!"
      side={isRtlLang(locale) ? "right" : "left"}
      {...props}
    >
      <LearnSideBarHeader languageId={language} />
      <SidebarContent className="gap-0">
        {languageContent.map((item) => (
          <Collapsible
            key={item.titleKey}
            title={item.titleKey}
            defaultOpen
            className="group/collapsible"
          >
            <SidebarGroup>
              <SidebarGroupLabel
                asChild
                className="group/label text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground text-sm"
              >
                <CollapsibleTrigger>
                  {tLanguage(`${item.titleKey}.title`)}
                  <ForwardChevron className="ms-auto transition-transform group-data-[state=open]/collapsible:rotate-90" />
                </CollapsibleTrigger>
              </SidebarGroupLabel>
              <CollapsibleContent>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {item.list.map((listItem) => (
                      <SidebarMenuItem key={listItem.titleKey}>
                        <SidebarMenuButton asChild>
                          <Link
                            href={`/learn/${language}/${listItem.titleKey}`}
                          >
                            {tLanguage(
                              `${item.titleKey}.list.${listItem.titleKey}`
                            )}
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              </CollapsibleContent>
            </SidebarGroup>
          </Collapsible>
        ))}
      </SidebarContent>
    </Sidebar>
  );
}

function LearnSideBarHeader({ languageId }: { languageId: string }) {
  const language = getLanguageById(languageId);
  if (!language) return null;
  const tLanguage = useTranslations(`languages.${languageId}`);
  const LanguageIcon = language.icon;
  return (
    <SidebarHeader>
      <SidebarMenu>
        <SidebarMenuItem>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <SidebarMenuButton className="flex justify-between items-center h-15 py-1">
                <div className="flex flex-col justify-start items-start">
                  <div className="flex justify-center items-center text-base gap-1">
                    {<LanguageIcon className="size-6" />}
                    {language.name}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    {tLanguage("description")}
                  </p>
                </div>
                <ChevronsUpDown className="ms-auto text-muted-foreground" />
              </SidebarMenuButton>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-[calc(var(--sidebar-width)-1rem)]">
              {LANGUAGES.map((lang) => {
                const LangIcon = lang.icon;
                return (
                  <Link key={lang.id} href={`/learn/${lang.id}/introduction`}>
                    <DropdownMenuItem className="flex items-center gap-2">
                      <LangIcon className="size-4" />
                      <span>{lang.name}</span>
                    </DropdownMenuItem>
                  </Link>
                );
              })}
            </DropdownMenuContent>
          </DropdownMenu>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarHeader>
  );
}
