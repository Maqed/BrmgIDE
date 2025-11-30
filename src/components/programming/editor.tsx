"use client";
import { Editor as MonacoEditor, EditorProps } from "@monaco-editor/react";
import { useTheme } from "next-themes";
import React from "react";

export function Editor({
  code,
  setCode,
  defaultValue,
  ...props
}: EditorProps & {
  code: string;
  setCode: React.Dispatch<React.SetStateAction<string>>;
}) {
  const { resolvedTheme } = useTheme();

  return (
    <MonacoEditor
      theme={resolvedTheme === "dark" ? "vs-dark" : "vs-light"}
      value={code ?? defaultValue}
      options={{
        minimap: { enabled: false },
      }}
      onChange={(value) => {
        setCode(value ?? "");
      }}
      {...props}
    />
  );
}

export * from "@monaco-editor/react";
