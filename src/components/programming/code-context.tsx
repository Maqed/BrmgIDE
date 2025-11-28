"use client";
import React, { ReactNode, useContext, useState } from "react";

type CodeContextType = {
  code: string;
  setCode: React.Dispatch<React.SetStateAction<string>>;
};

const CodeContext = React.createContext<CodeContextType>({
  code: "",
  setCode: () => {},
});

export const useCode = () => {
  return useContext(CodeContext);
};

function CodeProvider({ children }: { children: ReactNode }) {
  const [code, setCode] = useState("");
  return (
    <CodeContext.Provider value={{ code, setCode }}>
      {children}
    </CodeContext.Provider>
  );
}

export default CodeProvider;
