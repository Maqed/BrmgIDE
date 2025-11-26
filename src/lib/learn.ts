import NodejsIcon from "@/components/icons/nodejs";
import PythonIcon from "@/components/icons/python";
import React from "react";

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
  { titleKey: "getting-started", list: [{ titleKey: "introduction" }] },
];
const nodejsContent: Content[] = [
  { titleKey: "getting-started", list: [{ titleKey: "introduction" }] },
];

export const LANGUAGES: LanguageType[] = [
  {
    id: "python",
    name: "Python",
    icon: PythonIcon,
  },
  {
    id: "nodejs",
    name: "Nodejs",
    icon: NodejsIcon,
  },
];

export function getLanguageById(id: string) {
  return LANGUAGES.find((lang) => lang.id === id);
}
export function getLanguageContent(language: string) {
  switch (language) {
    case "python":
      return pythonContent;
    case "nodejs":
      return nodejsContent;
    default:
      throw new Error(
        `Language doesn't exist to get its content. Check getLanguageContent(${language}) call`
      );
  }
}
