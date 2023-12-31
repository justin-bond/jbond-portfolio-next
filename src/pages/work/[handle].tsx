import classNames from 'classnames';

import Container from '@/components/Container';
import Reveal from '@/components/Reveal';
import Link from 'next/link';
import SEO from '@/components/SEO';
import WorkHero from '@/components/WorkHero';
import Contact from '@/components/Contact';

import { getContentTypes, getWork } from '@/lib/api';
import { renderContentfulRichText } from '@/utils/renderContentfulRichText';
import SmartLink from '@/components/SmartLink';

const nsBase = 'template';
const ns = `${nsBase}-work`;

const Work = ({ page }: { page: ContentfulData }) => {
  const {
    seo,
    title,
    handle,
    description,
    disclaimer,
    websiteLink,
    mainImage,
    videoLink
  } = page.fields;

  const rootClassnames = classNames({
    [`${nsBase} ${ns}`]: true,
    [`${ns}--${handle}`]: handle
  });

  return (
    <div className={rootClassnames}>
      <SEO
        {...seo}
        metaTitle={`${seo?.fields.metaTitle || title} | Work | Justin Bond`}
        metaImage={
          seo?.fields.metaImage?.fields.file.url ||
          `https:${mainImage?.fields.file.url}`
        }
        // description={seo.metaDescription}
      />
      <Container size={'small'}>
        <div className={`${ns}__container`}>
          <Reveal>
            <WorkHero
              slug={handle}
              image={mainImage?.fields.file.url}
              video={videoLink}
            />
          </Reveal>
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
          {description && (
            <Reveal>
              <div className={`${ns}__description`}>
                {renderContentfulRichText(description)}
              </div>
            </Reveal>
          )}
          {disclaimer && (
            <Reveal>
              <div className={`${ns}__disclaimer`}>{disclaimer}</div>
            </Reveal>
          )}
          <Reveal>
            <div className={`${ns}__home`}>
              <SmartLink href={'/'} direction="left">
                Back to Home
              </SmartLink>
            </div>
          </Reveal>
        </div>
        <Reveal>
          <Contact />
        </Reveal>
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
