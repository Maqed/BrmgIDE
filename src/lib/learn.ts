import NodejsIcon from "@/components/icons/nodejs";
import PythonIcon from "@/components/icons/python";
import React from "react";

export type LanguageType = {
  id: string;
  name: string;
  icon: React.ComponentType<React.ComponentProps<"svg">>;
};

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
