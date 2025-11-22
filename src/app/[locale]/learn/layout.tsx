import type { ReactNode } from "react";
import { source } from "@/lib/source";
import { DocsLayout } from "fumadocs-ui/layouts/docs";
import { baseOptions } from "@/lib/layout.shared";
import { setRequestLocale } from "next-intl/server";

export default async function Layout({
  params,
  children,
}: {
  params: Promise<{ locale: string }>;
  children: ReactNode;
}) {
  const { locale } = await params;

  // Enable static rendering
  setRequestLocale(locale);

  return (
    <DocsLayout
      {...baseOptions(locale)}
      sidebar={{ enabled: false }}
      tree={source.pageTree[locale]}
    >
      {children}
    </DocsLayout>
  );
}
