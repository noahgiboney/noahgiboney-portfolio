import type { Metadata } from 'next'
import Head from 'next/head';
import { AppProps } from 'next/app';
import '../styles/global.css'; 
import RootLayout from '@/layouts/layout';

export const metadata: Metadata = {
  title: 'Noah Giboney Portfolio',
  description: 'Personal Website For Noah Giboney',
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RootLayout>
      <Head>
        <title>Noah Giboney Portfolio</title>
        <meta name="description" content="Personal Website For Noah Giboney" />
      </Head>
      <Component {...pageProps} />
    </RootLayout>
  );
}

export default MyApp;