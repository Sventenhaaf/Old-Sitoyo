import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from "@/components/layout";
import { Store } from "@/store/Store";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Store>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Store>
  );
}
