import { Html, Head, Main, NextScript } from 'next/document'
import { useRouter } from 'next/router'

export default function Document() {

  return (
    <Html lang="en">
      <Head />
      <body className='dark:bg-gray-900'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
