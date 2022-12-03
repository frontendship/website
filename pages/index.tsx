import type { NextPage } from "next";

import {
  Event,
  BriefSection,
  GitHubSection,
  ContributorsSection,
  Banner,
  CommunityModerators,
  Main,
} from "components";

const Home: NextPage = () => {
  return (
    <>
      <Main>
        <Banner />
        <Event />
        <ContributorsSection />
        <BriefSection />
        <GitHubSection />
        <CommunityModerators />
      </Main>
    </>
  );
};

export default Home;
