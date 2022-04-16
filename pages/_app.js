import Head from "next/head";
import "../styles/globals.css";
import Footer from "../components/Footer";

// Wrapper
export default function MyApp({ Component, pageProps }) {
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
        <Footer />
      </main>
    </>
  );
}
