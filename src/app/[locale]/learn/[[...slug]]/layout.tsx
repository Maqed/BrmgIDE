import type { ReactNode } from "react";
import { source } from "@/lib/source";
import { DocsLayout } from "fumadocs-ui/layouts/docs";
import { baseOptions } from "@/lib/layout.shared";
import { setRequestLocale } from "next-intl/server";
import LearnLayout from "@/components/layout/learn-layout";

export default async function Layout({
  params,
  children,
}: {
  params: Promise<{ locale: string; slug?: string[] }>;
  children: ReactNode;
}) {
  const { locale, slug } = await params;

  // Enable static rendering
  setRequestLocale(locale);

  let shouldShowSidebar = true;

  if (!slug?.length) {
    shouldShowSidebar = false;
  }

  return (
    <DocsLayout
      {...baseOptions(locale)}
      sidebar={{ enabled: false }}
      tree={source.pageTree[locale]}
    >
      <LearnLayout shouldShowSidebar={shouldShowSidebar}>
        {children}
      </LearnLayout>
    </DocsLayout>
  );
}
