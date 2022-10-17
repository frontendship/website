import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import logo from "../public/logo.png";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <link rel="shortcut icon" href="icon.png" />
        <title> Frontendship</title>
      </Head>
      <Image alt="Frontendship logo" src={logo} width={300} height={300} />

      <h1> Coming soon!</h1>
    </div>
  );
};

export default Home;
