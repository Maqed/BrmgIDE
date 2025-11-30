"use client";
import { useState } from "react";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "../ui/resizable";
import { Editor } from "../programming/editor";
import Compiler from "../programming/compiler";
import { SupportedLanguages } from "@/lib/learn";

function IDECompilerLayout({
  language,
  view,
  translation,
}: {
  view: "desktop" | "mobile";
  language: SupportedLanguages;
  translation: {
    run: string;
    pressRun: string;
  };
}) {
  const [code, setCode] = useState("");
  return (
    <ResizablePanelGroup
      className={
        view == "mobile"
          ? "h-[calc(100svh-var(--nav-height)-var(--tabs-list-height)-10px)]!"
          : ""
      }
      direction="vertical"
    >
      <ResizablePanel defaultSize={75}>
        <div dir="ltr" className="h-full">
          <Editor code={code} setCode={setCode} defaultLanguage={language} />
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={25}>
        <Compiler
          translation={{
            run: translation.run,
            pressRun: translation.pressRun,
          }}
          code={code}
          language={language}
        />
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}

export default IDECompilerLayout;
