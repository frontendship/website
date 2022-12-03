import type { NextPage } from 'next'

import { Event, Brief, GitHub, Banner, Contributors, Main } from 'components'

const Home: NextPage = () => {
  return (
    <>
      <Main>
        <Banner />
        <Event />
        <Brief />
        <Contributors />
        <GitHub />
      </Main>
    </>
  )
}

export default Home
