"use client";
import { Editor as MonacoEditor, EditorProps } from "@monaco-editor/react";
import { useTheme } from "next-themes";
import { useCode } from "./code-context";

export function Editor({ defaultValue, ...props }: EditorProps) {
  const { theme } = useTheme();
  const { code, setCode } = useCode();

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
