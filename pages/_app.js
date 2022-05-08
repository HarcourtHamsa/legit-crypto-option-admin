import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import { AuthProvider } from "../context/auth";

import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Head from "next/head";
import Loading from "../components/Loading";

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleStart = (url) => setLoading(true);
    const handleComplete = (url) => setLoading(false);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);
  });

  return (
    <AuthProvider>
      <Head>
        <title>Admin - Expert Hub Trade</title>
        <meta name="description" content="Expert Hub Trade Admin Dashboard" />
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
          key="viewport"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ChakraProvider>
        {loading ? <Loading loading={loading} /> : <Component {...pageProps} />}
      </ChakraProvider>
    </AuthProvider>
  );
}

export default MyApp;
