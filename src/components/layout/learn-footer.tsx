import { getArticleAndItsNeighbours, SupportedLanguages } from "@/lib/learn";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { BackwardChevron, ForwardChevron } from "../ui/chevrons";

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
  const tLanguage = useTranslations(`languages.${languageId}.content`);
  if (!prev && !next) return null;

  return (
    <div className="grid grid-cols-2">
      <div>
        {prev && (
          <Link
            className="no-underline"
            href={`/learn/${languageId}${prev.link}`}
          >
            <Card
              className="rounded-md h-16"
              title={tLanguage(prev.translationKey)}
            >
              <CardHeader>
                <CardTitle className="flex justify-start font-normal text-foreground/95 no-underline">
                  <BackwardChevron className="size-5 text-foreground/80" />
                  {tLanguage(prev.translationKey)}
                </CardTitle>
              </CardHeader>
            </Card>
          </Link>
        )}
      </div>
      <div>
        {next && (
          <Link
            className="no-underline"
            href={`/learn/${languageId}${next.link}`}
          >
            <Card
              className="rounded-md h-16"
              title={tLanguage(next.translationKey)}
            >
              <CardHeader>
                <CardTitle className="flex justify-end font-normal text-foreground/90 no-underline">
                  {tLanguage(next.translationKey)}
                  <ForwardChevron className="size-5 text-foreground/80" />
                </CardTitle>
              </CardHeader>
            </Card>
          </Link>
        )}
      </div>
    </div>
  );
}

export default LearnFooter;
