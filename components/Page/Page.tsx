import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Main.module.css";
import Section from "@/components/Section/Section";
import { FC, Fragment, useContext } from "react";
import { StoreContext } from "@/store/Store";
import Add from "../Add";

const inter = Inter({ subsets: ["latin"] });

interface Props {
  page: PAGE;
}

const Page: FC<Props> = ({ page }) => {
  const { addPage } = useContext(StoreContext);
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
          <Fragment key={section.id}>
            <Add nextId={section.id} />
            <Section section={section} />
          </Fragment>
        ))}
        <Add nextId={null} />
      </main>
    </>
  );
};

export default Page;
