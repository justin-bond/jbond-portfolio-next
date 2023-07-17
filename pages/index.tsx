import SEO from '@/components/SEO';
import Container from '@/components/Container';
import Reveal from '@/components/Reveal';
import Contact from '@/components/Contact';

import { getPage } from '@/lib/api';
import { renderSections } from '@/utils/renderSections';

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
      <Reveal>
        <Contact />
      </Reveal>
    </Container>
  );
}

export async function getStaticProps() {
  const page = await getPage('home');
  return { props: { page } };
}
