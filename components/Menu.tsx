import { CSSProperties, FC } from "react";

interface Props {}

const style: CSSProperties = {
  background: "#ff000022",
};

const Menu: FC<Props> = () => {
  return <div style={style}>Menu</div>;
};

export default Menu;
