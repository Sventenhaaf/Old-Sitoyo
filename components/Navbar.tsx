import { FC } from "react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

interface Props {}

const Navbar: FC<Props> = () => {
  return (
    <nav className={inter.className}>
      <div>Navbar</div>
    </nav>
  );
};

export default Navbar;
