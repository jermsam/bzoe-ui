import React from 'react';
import { AppProps } from 'next/app';
import grommet from 'theme/grommet'
import { Grommet} from 'grommet';

import 'public/css/main.css'
import 'semantic-ui-css/semantic.min.css'
import { ThemeProvider, CssBaseline } from '@material-ui/core';
import theme from 'theme';
import AuthContextWrapper from 'api/AuthContextWrapper';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import Router from 'next/router'
import { makeStyles } from '@material-ui/core/styles';
import {SEO,SCHEMA,LOGO }from 'next-seo.config'
import { NextSeo,LocalBusinessJsonLd,LogoJsonLd } from 'next-seo'

NProgress.configure({ showSpinner: false,trickleSpeed:3000, });

Router.events.on('routeChangeStart', () => {
    NProgress.start() 
})

Router.events.on('routeChangeComplete', () => {
    NProgress.done();
})

Router.events.on('routeChangeError', () => {
    NProgress.done();
})

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));


export default function MyApp(props: AppProps) {
  const { Component, pageProps } = props;
  const classes = useStyles();

 

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement!.removeChild(jssStyles);
    }
  }, []);

  return (
    <Grommet theme={grommet}>
    <NextSeo {...SEO} />
 <LocalBusinessJsonLd {...SCHEMA} />
  <LogoJsonLd {...LOGO}/>
    <ThemeProvider theme={theme}>
    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
    <CssBaseline />
    <AuthContextWrapper>
    <Component {...pageProps} />
    </AuthContextWrapper>
       
   </ThemeProvider>
      </Grommet>
  );
}