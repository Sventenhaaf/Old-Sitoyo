import { CSSProperties, FC } from "react";

interface Props {}

const style: CSSProperties = {
  background: "#ff000022",
  //   background: "blue",
};

const Logo: FC<Props> = () => {
  return <div style={style}>Logo</div>;
};

export default Logo;
