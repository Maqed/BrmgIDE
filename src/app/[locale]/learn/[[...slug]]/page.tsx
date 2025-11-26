import { getPageImage, source } from "@/lib/source";
import {
  DocsBody,
  DocsDescription,
  DocsPage,
  DocsTitle,
} from "fumadocs-ui/page";
import { notFound } from "next/navigation";
import { getMDXComponents } from "@/mdx-components";
import type { Metadata } from "next";
import { createRelativeLink } from "fumadocs-ui/mdx";
import { setRequestLocale } from "next-intl/server";
import { LANGUAGES } from "@/lib/learn";
import { routing } from "@/i18n/routing";

export default async function Page(
  props: PageProps<"/[locale]/learn/[[...slug]]">
) {
  const params = await props.params;

  // Enable static rendering
  setRequestLocale(params.locale);

  const page = source.getPage(params.slug, params.locale);
  if (!page) notFound();

  const MDX = page.data.body;

  return (
    <DocsPage full={page.data.full}>
      <DocsTitle>{page.data.title}</DocsTitle>
      <DocsDescription>{page.data.description}</DocsDescription>
      <DocsBody>
        <MDX
          components={getMDXComponents({
            // this allows you to link to other pages with relative file paths
            a: createRelativeLink(source, page),
          })}
        />
      </DocsBody>
    </DocsPage>
  );
}

export async function generateStaticParams() {
  const noSlug = routing.locales.map((locale) => ({
    lang: locale,
    slug: [],
  }));
  const languageParams = LANGUAGES.flatMap((lang) =>
    routing.locales.map((locale) => ({
      lang: locale,
      slug: [lang.id],
    }))
  );
  const fumaParams = source.generateParams();
  const params = [...noSlug, ...languageParams, ...fumaParams];
  return params;
}

export async function generateMetadata(
  props: PageProps<"/[locale]/learn/[[...slug]]">
): Promise<Metadata> {
  const params = await props.params;

  // Enable static rendering for metadata
  setRequestLocale(params.locale);

  const page = source.getPage(params.slug, params.locale);
  if (!page) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
    openGraph: {
      images: getPageImage(page).url,
    },
  };
}
