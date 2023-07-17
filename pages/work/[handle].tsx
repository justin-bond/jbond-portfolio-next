import classNames from 'classnames';

import { getContentTypes, getPage, getWork } from '@/lib/api';

import Container from '@/components/Container';
import Reveal from '@/components/Reveal';
import Link from 'next/link';
// import SEO from '@/components/SEO';

const nsBase = 'template';
const ns = `${nsBase}-work`;

const Work = ({ page }: { page: ContentfulData }) => {
  const {
    // seo: { fields: seo }
    title,
    handle,
    description,
    disclaimer,
    websiteLink,
    mainImage
  } = page.fields;

  const rootClassnames = classNames({
    [`${nsBase} ${ns}`]: true,
    [`${ns}--${handle}`]: handle
  });

  return (
    <div className={rootClassnames}>
      {/* <SEO
        title={`${seo.title || title} | Work`}
        page={title}
        image={metaImage}
        description={seo.metaDescription}
      /> */}
      <Container size={'small'}>
        <div className={`${ns}__container`}>
          <Reveal>
            <div className={`${ns}__title`}>
              <h1>{title}</h1>
            </div>
          </Reveal>
          {websiteLink && (
            <Reveal>
              <div className={`${ns}__website-link`}>
                <Link href={websiteLink} target={'_blank'}>
                  Website Link
                </Link>
              </div>
            </Reveal>
          )}
        </div>
      </Container>
    </div>
  );
};

export default Work;

export async function getStaticPaths() {
  try {
    const entries = await getContentTypes('work');

    const paths = entries.map((entry) => ({
      params: {
        handle: entry.fields.handle
      }
    }));

    return {
      paths,
      fallback: false
    };
  } catch (e: unknown) {
    throw new Error(`could not fetch content: ${e}`);
  }
}

export async function getStaticProps({
  params: { handle }
}: {
  params: { handle: string };
}) {
  const page = await getWork(handle);
  return { props: { page } };
}
