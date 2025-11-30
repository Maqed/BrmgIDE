"use client";
import { Button } from "../ui/button";
import { Link } from "@/i18n/navigation";
import { LANGUAGES } from "@/lib/learn";
import { useTranslations } from "next-intl";

function CallToAction() {
  const t = useTranslations("/");
  return (
    <section>
      <div className="py-12">
        <div className="mx-auto max-w-5xl px-6">
          <div className="space-y-6 text-center">
            <h2 className="text-foreground text-balance text-3xl font-semibold lg:text-4xl">
              {t("cta-title")}
            </h2>
            <div className="flex justify-center gap-3">
              <Button asChild size="lg">
                <Link href={`/learn/${LANGUAGES[0].id}/introduction`}>
                  {t("cta-get-started")}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CallToAction;
