import { RootProvider } from "fumadocs-ui/provider/next";
import { defineI18nUI } from "fumadocs-ui/i18n";
import { isRtlLang } from "rtl-detect";
import { i18n } from "@/lib/i18n";
import "../global.css";
import { NextIntlClientProvider } from "next-intl";

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

export default async function RootLayout({
  params,
  children,
}: {
  params: Promise<{ locale: string }>;
  children: React.ReactNode;
}) {
  const locale = (await params).locale;

  return (
    <html lang={locale}>
      <body dir={isRtlLang(locale) ? "rtl" : "ltr"}>
        <RootProvider i18n={provider(locale)}>
          <NextIntlClientProvider>{children}</NextIntlClientProvider>
        </RootProvider>
      </body>
    </html>
  );
}
