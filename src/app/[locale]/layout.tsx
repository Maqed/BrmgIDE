import { RootProvider } from "fumadocs-ui/provider/next";
import { defineI18nUI } from "fumadocs-ui/i18n";
import { getLangDir } from "rtl-detect";
import { i18n } from "@/lib/i18n";
import "../global.css";
import ClientProviders from "@/providers/client-providers";
import { Nav } from "@/components/layout/nav";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

const { provider } = defineI18nUI(i18n, {
  translations: {
    en: {
      displayName: "English",
    },
    ar: {
      displayName: "عربي",
      search: "ابحث",
    },
  },
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  params,
  children,
}: {
  params: Promise<{ locale: string }>;
  children: React.ReactNode;
}) {
  const locale = (await params).locale;

  // Validate locale
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);

  const dir = getLangDir(locale);

  return (
    <html lang={locale}>
      <body dir={dir}>
        <RootProvider i18n={provider(locale)}>
          <NextIntlClientProvider>
            <ClientProviders dir={dir}>
              <Nav />
              {children}
            </ClientProviders>
          </NextIntlClientProvider>
        </RootProvider>
      </body>
    </html>
  );
}
