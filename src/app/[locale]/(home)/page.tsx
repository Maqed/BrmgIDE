import { Nav } from "@/components/layout/nav";
import { Link } from "@/i18n/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Enable static rendering
  setRequestLocale(locale);

  const t = await getTranslations("/");
  return (
    <>
      <Nav />
      <div className="flex flex-col justify-center text-center h-[80vh]">
        <h1 className="text-2xl font-bold mb-4">{t("hello-world")}</h1>
        <p>
          {t.rich("open-learn", {
            link: (chunks) => <Link href="/learn">{chunks}</Link>,
          })}
        </p>
      </div>
    </>
  );
}
