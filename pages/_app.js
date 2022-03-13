import Head from "next/head";
import "../styles/globals.css";

// Wrapper
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>SpaceDex</title>
        <meta charset="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/x-icon" href="../public/favicon.ico" />
      </Head>
      <main>
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;
