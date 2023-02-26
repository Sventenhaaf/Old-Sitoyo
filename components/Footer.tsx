import { FC } from "react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

interface Props {}

const Footer: FC<Props> = () => {
  return (
    <nav className={inter.className}>
      <div>Footer</div>
    </nav>
  );
};

export default Footer;
