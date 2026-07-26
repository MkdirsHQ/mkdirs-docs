import { defineDocs } from "fumadocs-mdx/config";
import { metaSchema, pageSchema } from "fumapress/adapters/mdx/schema";

export const docs = defineDocs({
  dir: "content",
  docs: {
    async: true,
    schema: pageSchema,
    lastModified: true,
    postprocess: {
      includeProcessedMarkdown: true,
    },
  },
  meta: {
    schema: metaSchema,
  },
});
