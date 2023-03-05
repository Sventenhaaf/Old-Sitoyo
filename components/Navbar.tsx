import { FC } from "react";
import { Inter } from "next/font/google";
import Logo from "./Logo";
import Menu from "./Menu";
import styles from "@/styles/Navbar.module.css";

const inter = Inter({ subsets: ["latin"] });

interface Props {}

const Navbar: FC<Props> = () => {
  return (
    <nav className={`${styles.navbar} ${inter.className}`}>
      <a href="/">
        <Logo />
      </a>
      <Menu />
    </nav>
  );
};

export default Navbar;
