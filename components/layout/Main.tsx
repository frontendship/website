import React from 'react'
import { Header, Footer } from '../index'
import Head from 'next/head'

function Main({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="icon.png" />
        <title> Frontendship</title>
      </Head>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default Main
