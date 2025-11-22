"use client";
import NextLink, { type LinkProps as NextLinkProps } from "next/link";
import { useParams } from "next/navigation";

function Link({
  href,
  className,
  ...props
}: NextLinkProps & React.ComponentProps<"a">) {
  const { lang } = useParams();
  return <NextLink href={`/${lang}${href}`} {...props} />;
}

export default Link;
