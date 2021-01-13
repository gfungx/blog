if (process.env.NODE_ENV === 'development') {
  require('preact/debug');
}

import type { AppProps } from 'next/app';
import { Container } from 'next/app';
import 'tailwindcss/tailwind.css';
import { DefaultSeo } from 'next-seo';

const App = ({ Component, pageProps }: AppProps) => (
  <Container>
    <DefaultSeo
      title="Blog"
      titleTemplate="%s | Blog"
      description="A simple blogging app built with Next.js"
      canonical="https://blog.gfung.vercel.app"
      openGraph={{
        type: 'website',
        locale: 'en_IE',
        site_name: 'Blog',
        url: 'https://blog.gfung.vercel.app'
      }}
    />
    <Component {...pageProps} />
  </Container>
);

export default App;
