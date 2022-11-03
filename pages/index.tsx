import type { NextPage } from "next";
import Head from "next/head";
import { Header, Event, BriefSection, GitHubSection } from "components";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <link rel="shortcut icon" href="icon.png" />
        <title> Frontendship</title>
      </Head>
      <Header />
      <Event />
      <BriefSection />
      <GitHubSection />
    </div>
  );
};

export default Home;
