import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header/Header";
import Event from "../components/Event/Event";
const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <link rel="shortcut icon" href="icon.png" />
        <title> Frontendship</title>
      </Head>
      <Header />
      <Event />
    </div>
  );
};

export default Home;
