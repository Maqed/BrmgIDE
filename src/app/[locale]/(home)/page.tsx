import HeroSection from "@/components/landing/hero-section";
import { Nav } from "@/components/layout/nav";
import { getTranslations, setRequestLocale } from "next-intl/server";

export async function generateMetadata() {
  return { title: "BrmgIDE" };
}

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
      <HeroSection />
    </>
  );
}
