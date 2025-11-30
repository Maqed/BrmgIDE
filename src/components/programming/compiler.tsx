"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import { ForwardChevron } from "../ui/chevrons";
import { getLanguageExtension, SupportedLanguages } from "@/lib/learn";
import { Spinner } from "../ui/spinner";
import { cn } from "@/lib/utils";

function Compiler({
  translation,
  code,
  language,
}: {
  translation: {
    run: string;
    pressRun: string;
  };
  code: string;
  language: SupportedLanguages;
}) {
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function executeCode() {
    const response = await fetch("https://emkc.org/api/v2/piston/execute", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        language: language,
        version: "*", // Use latest version
        files: [
          {
            name:
              "main." +
              getLanguageExtension(language as "python" | "javascript"),
            content: code,
          },
        ],
        stdin: "", // Optional: input for the program
        args: [], // Optional: command line arguments
        compile_timeout: 10000, // Optional: milliseconds
        run_timeout: 3000, // Optional: milliseconds
        compile_memory_limit: -1, // Optional: bytes
        run_memory_limit: -1, // Optional: bytes
      }),
    });

    return await response.json();
  }

  async function compileAndSetOutput() {
    if (!code.trim()) return;
    setIsLoading(true);
    setError("");
    setOutput("");

    const compiledVersion = await executeCode();
    if (compiledVersion.run.stderr) {
      setError(compiledVersion.run.stderr);
    } else if (compiledVersion.run.stdout) {
      setOutput(compiledVersion.run.stdout);
    }

    setIsLoading(false);
  }

  return (
    <div className="flex flex-col gap-3">
      <div className="bg-muted text-xs text-muted-foreground flex justify-between items-center py-1 px-2">
        <div className="flex justify-center items-center">
          {translation.pressRun} --
          <ForwardChevron className="inline size-3" />
        </div>
        <Button onClick={compileAndSetOutput} size="xs">
          {translation.run}
        </Button>
      </div>
      <div
        dir="ltr"
        className={cn(
          "px-2 text-muted-foreground whitespace-pre-line",
          error && "text-destructive"
        )}
      >
        {isLoading && <Spinner />}
        {output && output}
        {error && error}
      </div>
    </div>
  );
}

export default Compiler;
