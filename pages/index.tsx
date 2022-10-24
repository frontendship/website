import type { NextPage } from "next";
import Head from "next/head";
import AllTitles from "../components/Title/AllTitles";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <link rel="shortcut icon" href="icon.png" />
        <title> Frontendship</title>
      </Head>
      <AllTitles />
    </div>
  );
};

export default Home;
