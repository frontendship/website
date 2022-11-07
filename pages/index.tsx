import type { NextPage } from "next";
import Head from "next/head";
import { Header, Event, BriefSection, GitHubSection, Banner } from "components";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="icon.png" />
        <title> Frontendship</title>
      </Head>
      <Header />
      <Banner />
      <Event />
      <BriefSection />
      <GitHubSection />
    </>
  );
};

export default Home;
