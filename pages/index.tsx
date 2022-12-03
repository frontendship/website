import type { NextPage } from 'next';
import Head from 'next/head';
import {
  Header,
  Event,
  BriefSection,
  GitHubSection,
  ContributorsSection,
  Banner,
  Footer,
} from 'components';

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
      <ContributorsSection />
      <BriefSection />
      <GitHubSection />
      <Footer />
    </>
  );
};

export default Home;
