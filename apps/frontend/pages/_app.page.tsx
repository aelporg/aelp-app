import { AppProps } from 'next/app';
import Head from 'next/head';
import './global.scss';
import { ApolloProvider } from '@apollo/client';
import AuthStoreProvider from '@modules/auth/store/auth-store';
import MeStoreProvider from '@modules/auth/store/me-store';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>aelp</title>
      </Head>
      <div className="app">
        <main>
            <AuthStoreProvider>
              <MeStoreProvider>
                <Component {...pageProps} />
              </MeStoreProvider>
            </AuthStoreProvider>
        </main>
      </div>
    </>
  );
}

export default CustomApp;
