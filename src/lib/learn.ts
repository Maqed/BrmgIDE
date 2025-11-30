import Javascript from "@/components/icons/javascript";
import PythonIcon from "@/components/icons/python";
import React from "react";

export type SupportedLanguages = "python" | "javascript";

export type LanguageType = {
  id: SupportedLanguages;
  name: string;
  icon: React.ComponentType<React.ComponentProps<"svg">>;
};
export type ListItemType = {
  titleKey: string;
  link: string;
};

interface Content {
  titleKey: string;
  list: ListItemType[];
}

const pythonContent: Content[] = [
  {
    titleKey: "getting-started",
    list: [
      { titleKey: "introduction", link: "/introduction" },
      { titleKey: "data-types", link: "/data-types" },
    ],
  },
];
const javascriptContent: Content[] = [
  {
    titleKey: "getting-started",
    list: [
      { titleKey: "introduction", link: "/introduction" },
      { titleKey: "data-types", link: "/data-types" },
    ],
  },
];

export const LANGUAGES: LanguageType[] = [
  {
    id: "python",
    name: "Python",
    icon: PythonIcon,
  },
  {
    id: "javascript",
    name: "Javascript",
    icon: Javascript,
  },
];

export function getLanguageById(
  id: SupportedLanguages
): LanguageType | undefined {
  return LANGUAGES.find((lang) => lang.id === id);
}
export function getLanguageContent(language: SupportedLanguages) {
  switch (language) {
    case "python":
      return pythonContent;
    case "javascript":
      return javascriptContent;
    default:
      throw new Error(
        `Language doesn't exist to get its content. Check getLanguageContent(${language}) call`
      );
  }
}
export function getLanguageExtension(language: SupportedLanguages) {
  const extensions = {
    python: "py",
    javascript: "js",
  };
  return extensions[language] || "txt";
}
export const isLanguageSupported = (
  languageId: string
): languageId is SupportedLanguages =>
  LANGUAGES.some((lang) => lang.id === languageId);

export function getArticleAndItsNeighbours({
  languageId,
  articleLink,
}: {
  languageId: SupportedLanguages;
  articleLink: string;
}): {
  prev: ListItemType | null;
  article: ListItemType | null;
  next: ListItemType | null;
} {
  const content = getLanguageContent(languageId);
  const contentWithoutAccordion = content.reduce(
    (accumulator, currentValue) => accumulator.concat(currentValue.list),
    [] as ListItemType[]
  );
  let prev = null;
  let article = null;
  let next = null;
  contentWithoutAccordion.forEach((contentArticle, index) => {
    if (contentArticle.link == articleLink) {
      article = contentArticle;
      if (index != 0) {
        prev = contentWithoutAccordion[index - 1];
      }
      if (index != contentWithoutAccordion.length - 1) {
        next = contentWithoutAccordion[index + 1];
      }
    }
  });

  return { prev, article, next };
}
