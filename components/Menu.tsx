import { StoreContext } from "@/store/Store";
import { CSSProperties, useState, FC, useContext } from "react";

interface Props {}

const style: CSSProperties = {
  background: "#ff000022",
};

const Menu: FC<Props> = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const {
    state: { pages },
  } = useContext(StoreContext);
  console.log("PAGES", pages);
  if (isExpanded) {
    return (
      <div
        style={{
          background: "#444",
          color: "white",
          position: "absolute",
          top: 0,
          right: 0,
          height: "100vh",
          minWidth: 200,
          padding: 20,
        }}
      >
        <h2>Menu</h2>
        {pages.map((page) => (
          <a
            href={page.slug}
            key={page.id}
            style={{ textDecoration: "none", color: "white", display: "block" }}
            onClick={() => setIsExpanded(false)}
          >
            {page.name}
          </a>
        ))}
      </div>
    );
  }
  return (
    <div style={style} onClick={() => setIsExpanded(true)}>
      Menu
    </div>
  );
};

export default Menu;
