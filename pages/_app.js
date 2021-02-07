import "../src/styles/styles.css";
import Head from "next/head";
import Layout from "@components/layout";
import { theme } from "tailwind.config";

function MyApp({ Component, pageProps }) {
  const themeColor = theme.extend.colors["wal-green"];

  return (
    <Layout>
      <Head>
        <title>WhatsApp Link</title>
        <meta
          name="Description"
          content="Envía mensajes a WhatsApp sin agregar el número."
        />
        <meta name="application-name" content="WhatsApp Link" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="PWA App" />
        <meta
          name="description"
          content="Envía mensajes a WhatsApp sin agregar a contactos"
        />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-TileColor" content={themeColor} />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="theme-color" content={themeColor} />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/icons/icon-192x192.png" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/icons/apple-touch-icon.png"
        />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>

      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
