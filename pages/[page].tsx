import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Main.module.css";
import Section from "@/components/Section/Section";
import { useContext } from "react";
import { StoreContext } from "@/store/Store";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

const Page = () => {
  const router = useRouter();
  const { page: slug } = router.query;

  const {
    addPage,
    state: { pages },
  } = useContext(StoreContext);
  // TODO: MAKE THIS DYNAMIC
  const page = pages.find((page) => page.slug === slug || (page.slug === "" && slug === "home"));
  if (!page)
    return (
      <div>
        404 <a href="/">Back to home</a>
      </div>
    );

  const title = "Sitoyo - " + page.name;
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="The simplest way to make a website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={`${inter.className} ${styles.main}`}>
        {page.sections.map((section) => (
          <Section key={section.id} section={section} />
        ))}
      </main>
    </>
  );
};

export default Page;
