export const LANGUAGES = [
  {
    id: "python",
    name: "Python",
  },
  {
    id: "nodejs",
    name: "Nodejs",
  },
];

export function getLanguageById(id: string) {
  return LANGUAGES.find((lang) => lang.id === id);
}
