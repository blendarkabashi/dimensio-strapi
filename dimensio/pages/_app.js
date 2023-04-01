// pages/_app.js
import '/styles/globals.scss';
import Head from 'next/head';
import Header from 'components/header';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}
