import Head from 'next/head';
import { useEffect, useState } from 'react';

interface SEOProps {
  metaTitle?: string;
  metaDescription?: string;
  metaImage?: string;
}

const SEO = ({ metaTitle, metaDescription, metaImage }: SEOProps) => {
  const defaultMetaTitle = 'Justin Bond';
  const defaultMetaDescription =
    'Justin Bond is a Frontend Engineer based out of Southern California.';
  const [metaUrl, setMetaUrl] = useState<any>({});
  const defaultMetaImage = `${metaUrl.origin}/jb-logo-black.jpg`;

  const seoMetaTitle = metaTitle || defaultMetaTitle;
  const seoMetaDescription = metaDescription || defaultMetaDescription;
  const seoMetaImage = metaImage || defaultMetaImage;

  useEffect(() => {
    setMetaUrl(window.location);
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
      {seoMetaImage && (
        <>
          <meta itemProp="image" content={seoMetaImage} />
          <meta property="og:image" content={seoMetaImage} key="og:image" />
          <meta property="twitter:image" content={seoMetaImage} />
          <meta
            property="og:image:secure"
            content={seoMetaImage}
            key="og:image:secure"
          />
        </>
      )}

      {metaUrl.href && (
        <meta property="og:url" content={metaUrl.href} key="og:url" />
      )}

      <meta property="og:type" content="website" key="og:type" />
      <meta property="twitter:card" content="summary" />
    </Head>
  );
};

export default SEO;
