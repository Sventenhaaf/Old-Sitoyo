import { StoreContext } from "@/store/Store";
import { CSSProperties, FC, useContext } from "react";

interface Props {}

const style: CSSProperties = {
  background: "#ff000022",
};

const Menu: FC<Props> = () => {
  const {
    state: { pages },
  } = useContext(StoreContext);
  console.log("PAGES", pages);
  return <div style={style}>Menu</div>;
};

export default Menu;
