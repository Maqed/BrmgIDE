import type { ReactNode } from "react";
import { HomeLayout } from "fumadocs-ui/layouts/home";
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

  return <HomeLayout {...baseOptions(locale)}>{children}</HomeLayout>;
}
