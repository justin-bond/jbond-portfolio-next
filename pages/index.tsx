import Head from 'next/head';

import SEO from '@/components/SEO';
import { getPage } from '@/lib/api';
import { renderSections } from '@/utils/renderSections';
import Container from '@/components/Container';

interface IndexProps {
  page: ContentfulData;
}

export default function Index({ page }: IndexProps) {
  const {
    seo: { fields: seo },
    sections
  } = page.fields;

  return (
    <Container size={'small'}>
      <SEO {...seo} />
      {renderSections(sections)}
    </Container>
  );
}

export async function getStaticProps() {
  const page = await getPage('home');
  return { props: { page } };
}
