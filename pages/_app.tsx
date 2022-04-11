import type { AppProps } from "next/app";
import Head from "next/head";
import "../styles/globals.css";

// Wrapper
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>SpaceDex</title>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <main>
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;
