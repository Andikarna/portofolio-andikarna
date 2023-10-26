import Head from "next/head"

export default function TheHead({title}) {
  return (
    <>
      <Head >
        <title>{title}</title>
        <link rel="icon" href="/images/andi.webp"></link>
      </Head>
    </>
  )
}