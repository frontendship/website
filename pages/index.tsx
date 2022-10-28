import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header/Header";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="icon.png" />
        <title> Frontendship</title>
      </Head>
      <Header />
    </>
  );
};

export default Home;
