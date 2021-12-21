import { AppProps } from 'next/app';
import Head from 'next/head';
import './global.scss';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import AuthStoreProvider from '@modules/auth/store/auth-store';
import getBackendLink from 'lib/getBackendLink';

const client = new ApolloClient({
  link: getBackendLink(),
  cache: new InMemoryCache(),
});

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>aelp</title>
      </Head>
      <div className="app">
        <main>
          <ApolloProvider client={client}>
            <AuthStoreProvider>
              <Component {...pageProps} />
            </AuthStoreProvider>
          </ApolloProvider>
        </main>
      </div>
    </>
  );
}

export default CustomApp;
