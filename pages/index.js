import Head from 'next/head'
import Image from 'next/image'
import Home from "./components/home"

export default function HomePage() {
  return (
    <div>
      <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
      </Head>
      <Home />
    </div>
  )
}

