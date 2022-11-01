import type { NextPage } from "next";
import Head from "next/head";
import GitHubSection from "../components/GitHubSection/GitHubSection";
import Header from "../components/Header/Header";
import CommunityModerators from "../components/CommunityModerators/CommunityModerators";
const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <link rel="shortcut icon" href="icon.png" />
        <title> Frontendship</title>
      </Head>
      <Header />
      <GitHubSection />
      <CommunityModerators />
    </div>
  );
};

export default Home;
