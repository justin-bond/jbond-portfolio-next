import { createClient } from 'contentful';

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID || '',
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN || ''
});

export const getContentTypes = async (contentType: string) => {
  const response = await client.getEntries({
    content_type: contentType,
    include: 10
  });

  return response.items;
};

export const getWork = async (handle: string) => {
  const response = await client.getEntries({
    content_type: 'work',
    'fields.handle[in]': handle,
    include: 10
  });

  return response.items[0];
};

export const getPage = async (handle: string) => {
  const response = await client.getEntries({
    content_type: 'page',
    'fields.handle[in]': handle,
    include: 10
  });

  return response.items[0];
};
