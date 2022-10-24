import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <link rel="shortcut icon" href="icon.png" />
        <title> Frontendship</title>
      </Head>
      <Header />
    </div>
  );
};

export default Home;
