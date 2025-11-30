import { getArticleAndItsNeighbours, SupportedLanguages } from "@/lib/learn";
import { Card } from "fumadocs-ui/components/card";
import { useLocale, useTranslations } from "next-intl";

function LearnFooter({
  languageId,
  articleLink,
}: {
  languageId: SupportedLanguages;
  articleLink: string;
}) {
  const { prev, next } = getArticleAndItsNeighbours({
    languageId,
    articleLink,
  });
  const locale = useLocale();
  const tLanguage = useTranslations(`languages.${languageId}.content`);
  if (!prev && !next) return null;

  return (
    <div className="grid grid-cols-2">
      <div>
        {prev && (
          <Card
            title={tLanguage(prev.translationKey)}
            href={`/${locale}/learn/${languageId}${prev.link}`}
          />
        )}
      </div>
      <div>
        {next && (
          <Card
            title={tLanguage(next.translationKey)}
            href={`/${locale}/learn/${languageId}${next.link}`}
          />
        )}
      </div>
    </div>
  );
}

export default LearnFooter;
