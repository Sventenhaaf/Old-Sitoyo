import { StoreContext } from "@/store/Store";
import { CSSProperties, useState, FC, useContext } from "react";
import Editable from "./Section/Editable";
import { convertToSlug } from "@/util";

interface Props {}

const style: CSSProperties = {
  background: "#ff000022",
};

const Menu: FC<Props> = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isAddingPage, setIsAddingPage] = useState(false);
  const {
    addPage,
    state: { pages },
  } = useContext(StoreContext);

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
        <br />
        <Editable
          value="New Page"
          onUpdate={(value) => addPage({ id: 123, name: value, slug: convertToSlug(value), sections: [] })}
        >
          <div>+ Add Page</div>
        </Editable>
        {/* {isAddingPage ? (<input />): <div>+ Add Page</div>} */}
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
