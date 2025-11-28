"use client";
import { Editor as MonacoEditor, EditorProps } from "@monaco-editor/react";
import { useTheme } from "next-themes";

export function Editor({ ...props }: EditorProps) {
  const { theme } = useTheme();

  return (
    <MonacoEditor
      theme={theme === "dark" ? "vs-dark" : "vs-light"}
      {...props}
    />
  );
}

export * from "@monaco-editor/react";
