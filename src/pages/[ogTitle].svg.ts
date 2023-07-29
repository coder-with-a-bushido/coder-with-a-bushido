import { getCollection } from "astro:content";
import generateOgImage from "@utils/generateOgImage";
import type { APIRoute } from "astro";

export const get: APIRoute = async ({ params }) => ({
  body: await generateOgImage(params.ogTitle),
});

const blogImportResult = await getCollection("blog", ({ data }) => !data.draft);
const storyImportResult = await getCollection(
  "story",
  ({ data }) => !data.draft
);
const blogs = Object.values(blogImportResult);
const stories = Object.values(storyImportResult);

export function getStaticPaths() {
  let val1 = blogs
    .filter(({ data }) => !data.ogImage)
    .map(({ data }) => ({
      params: { ogTitle: data.title },
    }));
  let val2 = stories
    .filter(({ data }) => !data.ogImage)
    .map(({ data }) => ({
      params: { ogTitle: data.title },
    }));
  return val1.concat(val2);
}
