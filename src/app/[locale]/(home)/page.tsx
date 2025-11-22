import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

export default function HomePage() {
  const t = useTranslations("/");
  return (
    <div className="flex flex-col justify-center text-center h-[90vh]">
      <h1 className="text-2xl font-bold mb-4">{t("hello-world")}</h1>
      <p>
        {t.rich("open-learn", {
          link: (chunks) => <Link href="/learn">{chunks}</Link>,
        })}
      </p>
    </div>
  );
}
