import { AppProps } from 'next/app'
import Head from 'next/head'
import './global.scss'
import AuthStoreProvider from '@modules/auth/store/auth-store'
import MeStoreProvider from '@modules/auth/store/me-store'

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>aelp</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
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
  )
}

export default CustomApp
