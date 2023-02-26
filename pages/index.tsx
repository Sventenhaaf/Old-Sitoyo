import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Main.module.css";
import Section from "@/components/Section/Section";
import { useContext } from "react";
import { StoreContext } from "@/store/Store";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const {
    addPage,
    state: { pages },
  } = useContext(StoreContext);
  // TODO: MAKE THIS DYNAMIC
  const page = pages[0];
  return (
    <>
      <Head>
        <title>Sitoyo</title>
        <meta name="description" content="The simplest way to make a website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={`${inter.className} ${styles.main}`}>
        {page.sections.map((section) => (
          <Section key={section.id} section={section} />
        ))}
        {/* <h1>Hello World</h1>
        <div
          style={{ color: "blue", cursor: "pointer" }}
          onClick={() => addPage({ id: 1, name: "New Page", sections: [] })}
        >
          Add page
        </div>
        <p>Lorem Ipsum</p>
        <p>Lorem Ipsum</p>
        <p>Lorem Ipsum</p>
        <p>Lorem Ipsum</p>
        <p>Lorem Ipsum</p>
        <p>Lorem Ipsum</p>
        <p>Lorem Ipsum</p>
        <p>Lorem Ipsum</p>
        <p>Lorem Ipsum</p>
        <p>Lorem Ipsum</p>
        <p>Lorem Ipsum</p>
        <p>Lorem Ipsum</p>
        <p>Lorem Ipsum</p>
        <p>Lorem Ipsum</p>
        <p>Lorem Ipsum</p>
        <p>Lorem Ipsum</p>
        <p>Lorem Ipsum</p>
        <p>Lorem Ipsum</p>
        <p>Lorem Ipsum</p>
        <p>Lorem Ipsum</p>
        <p>Lorem Ipsum</p> */}
      </main>
    </>
  );
}
