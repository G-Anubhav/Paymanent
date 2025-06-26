import "bootstrap/dist/css/bootstrap.min.css";
import Head from "next/head";
import { useEffect } from "react";
import Layout from "../components/layout";
import "../styles/globals.scss";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  if (Component.getLayout) {
    return Component.getLayout(
      <>
        <Head>
          <title>Paymanent - All-in-One Payment and Banking Solutions for Everyone — from Individuals to Large Enterprises</title>
          <meta name="description" content="All-in-one Payment Solution" />
          <link rel="icon" href="favicon.ico" />
        </Head>
        <Component {...pageProps} />
      </>
    );
  }

  return (
    <>
      <Head>
        <title>Paymanent - All-in-One Payment and Banking Solutions for Everyone — from Individuals to Large Enterprises</title>
        <meta name="description" content="All-in-one Payment Solution" />
        <link rel="icon" href="favicon.ico" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
