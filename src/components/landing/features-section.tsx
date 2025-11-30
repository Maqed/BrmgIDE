import { useTranslations } from "next-intl";
import FeaturesIDE from "./features-ide";

export default function Features() {
  const t = useTranslations("/");
  const tCompiler = useTranslations("compiler");
  return (
    <section>
      <div className="bg-muted/50 py-24">
        <div className="mx-auto w-full max-w-5xl px-6">
          <div>
            <h2 className="text-foreground text-4xl font-semibold">
              {t("features-title")}
            </h2>
            <p className="text-muted-foreground mb-12 mt-4 text-balance text-lg">
              {t("features-description")}
            </p>
            <div className="bg-primary/5 rounded-3xl p-6">
              <FeaturesIDE
                translation={{
                  pressRun: tCompiler("press-run"),
                  run: tCompiler("run"),
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
