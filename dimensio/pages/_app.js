// pages/_app.js
import '/styles/globals.scss';
import Head from 'next/head';
import Header from 'components/header';
import store from '../store';
import { Provider, useSelector } from 'react-redux';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <Header />
        <Component {...pageProps} />
      </Provider>
    </>
  );
}
