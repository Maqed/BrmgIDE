"use client";
import { useState } from "react";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "../ui/resizable";
import { Editor } from "../programming/editor";
import Compiler from "../programming/compiler";
import { EditorSettings } from "@/lib/learn";

function IDECompilerLayout({
  language,
  languageEditorSettings,
  view,
  translation,
}: {
  languageEditorSettings: EditorSettings | undefined;
  view: "desktop" | "mobile";
  language: string;
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
          ? "h-[calc(100svh-var(--nav-height)-var(--tabs-list-height)-5px)]!"
          : ""
      }
      direction="vertical"
    >
      <ResizablePanel defaultSize={75}>
        <div dir="ltr" className="h-full">
          <Editor
            code={code}
            setCode={setCode}
            defaultLanguage={languageEditorSettings?.language ?? language}
            defaultValue={languageEditorSettings?.comment ?? ""}
          />
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
