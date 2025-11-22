import { getPageImage, source } from "@/lib/source";
import { notFound } from "next/navigation";
import { ImageResponse } from "next/og";
import { generate as DefaultImage } from "fumadocs-ui/og";

export const revalidate = false;
export const dynamic = "force-static";

export async function GET(
  _req: Request,
  { params }: RouteContext<"/[locale]/og/learn/[...slug]">
) {
  const { slug, locale } = await params;
  const page = source.getPage(slug.slice(0, -1), locale);
  if (!page) notFound();

  return new ImageResponse(
    (
      <DefaultImage
        title={page.data.title}
        description={page.data.description}
        site="BrmgIDE"
      />
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}

export function generateStaticParams() {
  return source
    .getPages()
    .filter((page) => page.locale === "en")
    .map((page) => ({
      locale: page.locale,
      slug: getPageImage(page).segments,
    }));
}
