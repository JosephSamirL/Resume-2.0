import { ApolloProvider } from '@apollo/client';
import client from '../../lib/client';
import '@/styles/globals.css'
import '@/styles/mediaQueries.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return  <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
}


