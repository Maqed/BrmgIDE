"use client";
import NextLink, { type LinkProps as NextLinkProps } from "next/link";
import { useParams } from "next/navigation";

function Link({
  href,
  className,
  ...props
}: NextLinkProps & React.ComponentProps<"a">) {
  const { locale } = useParams();
  return <NextLink href={`/${locale}${href}`} {...props} />;
}

export default Link;
