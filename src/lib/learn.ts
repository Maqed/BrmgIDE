import NodejsIcon from "@/components/icons/nodejs";
import PythonIcon from "@/components/icons/python";

export const LANGUAGES = [
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
