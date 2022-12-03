import type { NextPage } from 'next'

import {
  Event,
  Brief,
  GitHub,
  Contributors,
  Banner,
  Mods,
  Main,
} from 'components'

const Home: NextPage = () => {
  return (
    <>
      <Main>
        <Banner />
        <Event />
        <Contributors />
        <Brief />
        <GitHub />
        <Mods />
      </Main>
    </>
  )
}

export default Home
