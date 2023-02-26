import { FC, CSSProperties } from "react";
import { Inter } from "next/font/google";
import { HEADER_FOOTER_HEIGHT } from "./config";

const inter = Inter({ subsets: ["latin"] });

interface Props {}

const style: CSSProperties = {
  background: "#333",
  color: "white",
  height: HEADER_FOOTER_HEIGHT,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  paddingLeft: 10,
  paddingRight: 10,
  position: "sticky",
  top: 0,
};

const Footer: FC<Props> = () => {
  return (
    <nav className={inter.className} style={style}>
      <div>Footer</div>
    </nav>
  );
};

export default Footer;
