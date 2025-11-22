"use client";
import { DirectionProvider } from "@radix-ui/react-direction";
import { ReactNode } from "react";

function ClientProviders({
  children,
  dir,
}: {
  children: ReactNode;
  dir: "rtl" | "ltr";
}) {
  return <DirectionProvider dir={dir}>{children}</DirectionProvider>;
}

export default ClientProviders;
