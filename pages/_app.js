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
//import SeoHead from "../src/components/seoComponents/seoHead";
import specialTitle from "../src/components/seoComponents/specialTitles"


// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const {...appProps} = props
  console.log(appProps.router.pathname);

  return (
    <CacheProvider value={emotionCache}>
    {/*<SeoHead
        canonicalUrl={appProps.router.pathname}
        title={specialTitle[appProps.router.pathname]}
      />*/}
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
