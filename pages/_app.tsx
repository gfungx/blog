if (process.env.NODE_ENV === 'development') {
  require('preact/debug');
}

import type { AppProps } from 'next/app';
import 'tailwindcss/tailwind.css';

const App = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default App;
