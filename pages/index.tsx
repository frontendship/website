import type { NextPage } from "next";
import Head from "next/head";
import GitHubSection from "../components/GitHubSection/GitHubSection";
import BriefSection from "../components/BriefSection/BriefSection";
import Header from "../components/Header/Header";
const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <link rel="shortcut icon" href="icon.png" />
        <title> Frontendship</title>
      </Head>
      <Header />
      <BriefSection />
      <GitHubSection />
    </div>
  );
};

export default Home;
