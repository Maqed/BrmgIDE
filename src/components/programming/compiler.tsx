"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import { ForwardChevron } from "../ui/chevrons";

function Compiler({
  translation,
  language,
}: {
  translation: {
    run: string;
    pressRun: string;
    output: string;
  };
  language: string;
}) {
  const [output, setOutput] = useState("");

  function compileAndSetOutput() {
    const compiledVersion = "";

    setOutput(compiledVersion);
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
      <div className="px-2 text-muted-foreground">
        {output ? output : translation.output}
      </div>
    </div>
  );
}

export default Compiler;
