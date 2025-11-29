import Javascript from "@/components/icons/javascript";
import PythonIcon from "@/components/icons/python";
import React from "react";

export type SupportedLanguages = "python" | "javascript";

export type LanguageType = {
  id: string;
  name: string;
  icon: React.ComponentType<React.ComponentProps<"svg">>;
};
interface Content {
  titleKey: string;
  list: {
    titleKey: string;
  }[];
}

const pythonContent: Content[] = [
  {
    titleKey: "getting-started",
    list: [{ titleKey: "introduction" }, { titleKey: "data-types" }],
  },
];
const javascriptContent: Content[] = [
  {
    titleKey: "getting-started",
    list: [{ titleKey: "introduction" }, { titleKey: "data-types" }],
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

export function getLanguageById(id: string) {
  return LANGUAGES.find((lang) => lang.id === id);
}
export function getLanguageContent(language: string) {
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
