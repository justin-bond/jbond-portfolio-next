import Head from 'next/head';
import { useEffect, useState } from 'react';

interface SEOProps {
  metaTitle?: string;
  metaDescription?: string;
}

const SEO = ({ metaTitle, metaDescription }: SEOProps) => {
  const defaultMetaTitle = 'Justin Bond';
  const defaultMetaDescription = 'this is it!';
  const metaImage = '';
  const [metaUrl, setMetaUrl] = useState('');

  const seoMetaTitle = metaTitle || defaultMetaTitle;
  const seoMetaDescription = metaDescription || defaultMetaDescription;

  useEffect(() => {
    setMetaUrl(window.location.href);
  }, []);

  return (
    <Head>
      {seoMetaTitle && (
        <>
          <title>{seoMetaTitle}</title>
          <meta property="og:title" content={seoMetaTitle} key="title" />
          <meta property="twitter:title" content={seoMetaTitle} />
          <meta itemProp="name" content={seoMetaTitle} />
        </>
      )}
      {seoMetaDescription && (
        <>
          <meta
            key="description"
            name="description"
            property="description"
            content={seoMetaDescription}
          />
          <meta
            property="og:description"
            content={seoMetaDescription}
            key="og:description"
          />
          <meta property="twitter:description" content={seoMetaDescription} />
          <meta itemProp="description" content={seoMetaDescription} />
        </>
      )}
      {metaImage && (
        <>
          <meta itemProp="image" content={metaImage} />
          <meta property="og:image" content={metaImage} key="og:image" />
          <meta property="twitter:image" content={metaImage} />
          <meta
            property="og:image:secure"
            content={metaImage}
            key="og:image:secure"
          />
        </>
      )}

      {metaUrl && <meta property="og:url" content={metaUrl} key="og:url" />}

      <meta property="og:type" content="website" key="og:type" />
      <meta property="twitter:card" content="summary" />
    </Head>
  );
};

export default SEO;
