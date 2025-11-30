import type { ReactNode } from "react";
import { source } from "@/lib/source";
import { DocsLayout } from "fumadocs-ui/layouts/docs";
import { baseOptions } from "@/lib/layout.shared";
import { setRequestLocale } from "next-intl/server";
import LearnLayout from "@/components/layout/learn-layout";
import { redirect } from "@/i18n/navigation";
import { notFound } from "next/navigation";
import {
  isLanguageSupported,
  LANGUAGES,
  type SupportedLanguages,
} from "@/lib/learn";

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

  if (!slug || !slug.length) {
    redirect({ href: `/learn/${LANGUAGES[0].id}/introduction`, locale });
  }

  const language = slug![0];
  if (!isLanguageSupported(language)) {
    notFound();
  }

  if (slug!.length == 1) {
    redirect({ href: `/learn/${language}/introduction`, locale });
  }

  return (
    <DocsLayout
      {...baseOptions(locale)}
      sidebar={{ enabled: false }}
      tree={source.pageTree[locale]}
    >
      <LearnLayout language={language}>{children}</LearnLayout>
    </DocsLayout>
  );
}
