import { createClient } from "contentful";

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID || "",
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN || "",
});

export const getPage = async (handle: string) => {
  const response = await client.getEntries({
    content_type: "page",
    "fields.handle[in]": handle,
  });

  return response.items[0];
};
