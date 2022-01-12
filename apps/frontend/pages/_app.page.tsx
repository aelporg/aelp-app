import { AppProps } from 'next/app';
import Head from 'next/head';
import './global.scss';
import { ApolloProvider } from '@apollo/client';
import AuthStoreProvider from '@modules/auth/store/auth-store';
import { gqlClient } from 'graphql/client';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>aelp</title>
      </Head>
      <div className="app">
        <main>
          <ApolloProvider client={gqlClient}>
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
