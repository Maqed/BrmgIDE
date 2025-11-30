"use client";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import { ForwardChevron } from "../ui/chevrons";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { isRtlLang } from "rtl-detect";

export default function HeroSection() {
  const locale = useLocale();
  const { resolvedTheme } = useTheme();
  const t = useTranslations("/");

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <section className="overflow-hidden min-h-[calc(100svh-var(--nav-height))] bg-linear-to-b to-muted from-background">
      <div className="relative py-36">
        <div className="relative z-10 mx-auto w-full max-w-5xl px-6">
          <div className="md:w-1/2">
            <div>
              <h1
                className={cn(
                  "max-w-md text-balance text-5xl font-medium md:text-6xl",
                  { "leading-19": isRtlLang(locale) }
                )}
              >
                {t("hero-title")}
              </h1>
              <p className="text-muted-foreground my-8 max-w-2xl text-balance text-xl">
                {t("hero-description")}
              </p>

              <div className="flex items-center gap-3">
                <Button asChild size="lg" className="pe-4.5">
                  <Link href="/learn">
                    <span className="text-nowrap">{t("hero-get-started")}</span>
                    <ForwardChevron className="opacity-50" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="perspective-near mt-24 translate-x-12 md:absolute md:-end-6 md:bottom-16 md:start-1/2 md:top-40 md:mt-0 md:translate-x-0">
          <div className="before:border-foreground/5 before:bg-foreground/5 relative h-full before:absolute before:-inset-x-4 before:bottom-7 before:top-0 before:skew-x-6 before:rounded-[calc(var(--radius)+1rem)] before:border">
            <div className="bg-background rounded-(--radius) shadow-foreground/10 ring-foreground/5 relative h-full -translate-y-12 skew-x-6 overflow-hidden border border-transparent shadow-md ring-1">
              <Image
                src={`/${locale}/hero-${
                  mounted && resolvedTheme ? resolvedTheme : "light"
                }.png`}
                alt={t("hero-image-alt")}
                width="2880"
                height="1842"
                className={cn(
                  "size-full object-cover",
                  isRtlLang(locale) ? "object-top-right" : "object-top-left"
                )}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
