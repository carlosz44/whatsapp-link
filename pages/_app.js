import '../src/styles/styles.css';
import 'intl-tel-input/build/css/intlTelInput.css';
import Head from 'next/head';
import Script from 'next/script';
import Layout from '@components/layout';
import { theme } from 'tailwind.config';

function MyApp({ Component, pageProps }) {
  const themeColor = theme.extend.colors['wal-green'];
  const GA_ID = process.env.NEXT_PUBLIC_ANALYTICS_ID;

  return (
    <Layout>
      <Head>
        <title>Whatsabi</title>
        <meta
          name="Description"
          content="Envía mensajes a WhatsApp sin agregar el número a tu lista de contactos."
        />
        <meta name="application-name" content="Whatsabi" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="PWA App" />
        <meta
          name="description"
          content="Envía mensajes a WhatsApp sin agregar  el número a tu lista de contactos"
        />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-TileColor" content={themeColor} />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="theme-color" content={themeColor} />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/icons/whatsabi.png" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/icons/whatsabi.png"
        />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
      />
      <Script id="ga-analytics">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${GA_ID}');
          `}
      </Script>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
