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
  const { theme } = useTheme();

  return (
    <MonacoEditor
      theme={theme === "dark" ? "vs-dark" : "vs-light"}
      value={code ?? defaultValue}
      onChange={(value) => {
        setCode(value ?? "");
      }}
      {...props}
    />
  );
}

export * from "@monaco-editor/react";
