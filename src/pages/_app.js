import Layout from '@/components/Layout';

import '@/styles/globals.css';
import '@/styles/Home.module.css';
import 'flowbite';
import 'animate.css';

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>

  )
}
