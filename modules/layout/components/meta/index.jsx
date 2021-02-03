import React, { useContext } from 'react';
import Head from 'next/head';
import NavContext from '@/modules/layout/NavContext';
import { useRouter } from 'next/router';
import defaultConfig from '../../../../site.config';

const Meta = () => {
  const [, , meta] = useContext(NavContext);
  const router = useRouter();

  const config = {
    title: meta?.title || defaultConfig.title,
    language: router.locale,
    description: meta?.description || defaultConfig.description,
    siteName: defaultConfig.siteName,
    alternates: meta?.alternates || defaultConfig.alternates,
  };

  return (
    <Head>
      <title>{config.title}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta content={config.language} property="og:language" />
      <meta content={config.language} name="language" />
      <meta content={config.description} name="description" />
      <meta content={config.description} name="og:description" />
      <meta content={config.title} property="og:title" />
      <meta content={config.canonical} property="og:url" />
      <link rel="canonical" href={config.canonical} />
      <meta property="og:site_name" content={config.siteName} />
      <meta property="og:type" content="website" />
      <meta content="summary_large_image" name="twitter:card" />
    </Head>
  );
};

export default Meta;
