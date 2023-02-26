import { FC, CSSProperties } from "react";
import { Inter } from "next/font/google";
import { HEADER_FOOTER_HEIGHT } from "./config";
import Logo from "./Logo";
import Menu from "./Menu";

const inter = Inter({ subsets: ["latin"] });

interface Props {}

const style: CSSProperties = {
  background: "#ffffffee",
  height: HEADER_FOOTER_HEIGHT,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  paddingLeft: 10,
  paddingRight: 10,
  position: "sticky",
  top: 0,
};

const Navbar: FC<Props> = () => {
  return (
    <nav className={inter.className} style={style}>
      {/* <div>Navbar</div> */}
      <Logo />
      <Menu />
    </nav>
  );
};

export default Navbar;
