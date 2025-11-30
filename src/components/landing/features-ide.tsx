"use client";

import { LANGUAGES } from "@/lib/learn";
import { useState } from "react";
import IDECompilerLayout from "../layout/ide-compiler-layout";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { ChevronDown } from "lucide-react";

function FeaturesIDE({
  translation,
}: {
  translation: {
    pressRun: string;
    run: string;
  };
}) {
  const [language, setLanguage] = useState(LANGUAGES[0]);
  const LanguageIcon = language.icon;
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button className="flex justify-between items-center mb-5" size="lg">
            <div className="flex justify-center items-center text-base gap-2">
              {<LanguageIcon className="size-6" />}
              {language.name}
            </div>
            <ChevronDown />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {LANGUAGES.map((lang) => {
            const LangIcon = lang.icon;
            return (
              <DropdownMenuItem
                key={`features-ide-${lang.id}`}
                onSelect={() => {
                  setLanguage(lang);
                }}
                className="flex items-center gap-2"
              >
                <LangIcon className="size-4" />
                <span>{lang.name}</span>
              </DropdownMenuItem>
            );
          })}
        </DropdownMenuContent>
      </DropdownMenu>
      <div className="h-[90vh]">
        <IDECompilerLayout
          language={language.id}
          view="desktop"
          translation={{
            pressRun: translation.pressRun,
            run: translation.run,
          }}
        />
      </div>
    </>
  );
}

export default FeaturesIDE;
