import Layout from '@/components/Layouts/Layout';
import { NextUIProvider } from '@nextui-org/react';

import '@/styles/globals.css';
import '@/styles/Home.module.css';
import 'flowbite';
import 'animate.css';

export default function App({ Component, pageProps }) {
  return (
    <NextUIProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </NextUIProvider>

  )
}
