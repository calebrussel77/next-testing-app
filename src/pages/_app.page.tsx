/* eslint-disable @typescript-eslint/ban-types */
import ProgressBar from '@badrap/bar-of-progress';
import '@styles/globals.css';
import type {NextPage} from 'next';
import {DefaultSeo} from 'next-seo';
import type {AppProps} from 'next/app';
import Head from 'next/head';
import {Router} from 'next/router';
import type {ReactElement, ReactNode} from 'react';

const progress = new ProgressBar({
  size: 2,
  className: 'bar-of-progress',
  delay: 100,
  color: '#eab308',
});

// this fixes safari jumping to the bottom of the page
// when closing the search modal using the `esc` key
if (typeof window !== 'undefined') {
  progress.start();
  progress.finish();
}

Router.events.on('routeChangeStart', progress.start);
Router.events.on('routeChangeComplete', () => {
  progress.finish();
  window.scrollTo(0, 0);
  Router.events.on('routeChangeError', progress.finish);
});

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function MyApp({Component, pageProps}: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? (page => page);

  return (
    <>
      <DefaultSeo
        defaultTitle="Photoboard - Commandez pour transformer vos photos sous forme de tableau"
        titleTemplate="%s | Photoboard - Commandez pour transformer vos photos sous forme de tableau"
        languageAlternates={[
          {href: 'https://www.photoboard.com/', hrefLang: 'en'},
          {href: 'https://www.photoboard.com/fr', hrefLang: 'fr'},
        ]}
        description="Transformez vos photos sous forme de tableau de tous types (bois, verres, etc.), pour votre maison. Nous vous proposons également la conception de bâches, ainsi que des traitements photos."
        openGraph={{
          type: 'website',
          locale: 'fr_FR',
          url: 'https://www.photoboard.com/',
          images: [
            {
              url: 'https://res.cloudinary.com/lerussecaleb/image/upload/v1666462290/photoboard-preview_iyontu.png',
              width: 500,
              height: 500,
              alt: 'Photoboard preview',
              type: 'image/png',
            },
          ],
          site_name: 'Photoboard',
        }}
      />
      <Head>
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="application-name" content="Photoboard" />
        <meta name="apple-mobile-web-app-title" content="Photoboard" />
        <meta name="theme-color" content="#ffff" />
        <meta name="msapplication-navbutton-color" content="#ffff" />
        <meta name="author" content="Caleb russel" />
        <meta
          name="keywords"
          content="Photoboard, photos, images, tableau en bois, bâches, perciglace, vente, shop "
        />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta name="msapplication-starturl" content="/" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
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
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/android-chrome-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="512x512"
          href="/android-chrome-512x512.png"
        />
      </Head>
      {getLayout(<Component {...pageProps} />)}
    </>
  );
}
