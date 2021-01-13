import { FunctionalComponent } from 'preact';
import { NextSeo, NextSeoProps } from 'next-seo';

const Page: FunctionalComponent<NextSeoProps> = ({
  children,
  title,
  description,
  canonical,
  openGraph
}) => (
  <>
    <NextSeo
      title={title}
      description={description}
      canonical={canonical}
      openGraph={{
        title,
        description,
        url: canonical,
        ...openGraph
      }}
    />
    {children}
  </>
);

export default Page;
