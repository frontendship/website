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
      <Image alt="Frontendship logo" src={logo} width={200} height={200} />


      <p className="CS">COMING SOON! </p>
    </div>
  );
};

export default Home;
