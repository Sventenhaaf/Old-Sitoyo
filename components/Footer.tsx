import { FC } from "react";
import { Inter } from "next/font/google";
import styles from "@/styles/Footer.module.css";

const inter = Inter({ subsets: ["latin"] });

interface Props {}

const Footer: FC<Props> = () => {
  return (
    <nav className={`${styles.footer} ${inter.className}`}>
      <div>Footer</div>
    </nav>
  );
};

export default Footer;
