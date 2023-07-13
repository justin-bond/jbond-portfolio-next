import Head from 'next/head';

import SEO from '@/components/SEO';
import { getPage } from '@/lib/api';
import { renderSections } from '@/utils/renderSections';
import Container from '@/components/Container';
import { useEffect } from 'react';

interface IndexProps {
  page: ContentfulData;
}

export default function Index({ page }: IndexProps) {
  // console.log(page);
  const {
    seo: { fields: seo },
    sections
  } = page.fields;

  // console.log(seo, sections);

  return (
    <Container size={'small'}>
      <SEO {...seo} />
      {renderSections(sections)}
    </Container>
  );
}

Index.getInitialProps = async () => {
  const page = await getPage('home');
  return { page };
};
