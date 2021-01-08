if (process.env.NODE_ENV === 'development') {
  require('preact/debug');
}

import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';

import theme from 'styles/theme';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default App;
