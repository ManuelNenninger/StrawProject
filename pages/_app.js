import * as React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import theme from '../styles/theme';
import '../styles/globals.css';
import Layout from "../src/components/layout";
//So importierst Du css Styles. --> import "../styles/consoleLogDesignCss.css"
import createEmotionCache from '../src/createEmotionCache';
import { AppWrapper } from "../src/appContext";


// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const {...appProps} = props
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>Strohhalm aus Reisstärke - Umweltfreundliche alternative zu Plastik</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <meta name="robots" content="all" />
        <meta name="google" content="notranslate" />
        <meta name="title" content="Strohhalm aus Reisstärke - Umweltfreundliche alternative zu Plastik" key="title" />
        <meta property="og:title" content="Strohhalm aus Reisstärke - Umweltfreundliche alternative zu Plastik"  />
        <meta name="description" content="Eine alternative zu deinem Plastik Strohhalm - Strohhalm aus Reisstärke" key="desc" />
        <meta property="og:description" content="Eine alternative zu deinem Plastik Strohhalm - Strohhalm aus Reisstärke" />
        <meta name="site_name" content="Rice Straw" key="name"/>
        <meta name="type" content="website" key="type"/>
        <meta property="og:site_name" content="Rice Straw" />
        <meta property="og:type" content="website"/>
        <link rel="canonical" href=""/>
        <meta name="keywords" content="plastik strohhalm alternative, papier strohhalm, reis strohhalm, trinkhalm für kinder, bio strohhalm, kompostierbar strohhalm"/>
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
          <AppWrapper>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </AppWrapper>
      </ThemeProvider>
    </CacheProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};
