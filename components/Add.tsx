import { ALL_SECTION_TYPES } from "@/config/config";
import { FC, useEffect, useRef, useState } from "react";

interface Props {
  nextId: number | null;
}

const TitleThumbnail = () => {
  return (
    <div>
      <div>Title</div>
      <div>Subitle</div>
    </div>
  );
};

const TypeThumbnail: FC<{ type: SECTION_TYPE }> = ({ type }) => {
  const renderThumbnail = () => {
    switch (type) {
      case "image":
        return <div>Image</div>;
      case "title":
        return <TitleThumbnail />;
      case "paragraph":
        return <div>paragraph</div>;
    }
  };
  return <div style={{ padding: 10, borderRadius: 4, border: "1px solid gray" }}>{renderThumbnail()}</div>;
};

function useOutsideAlerter(ref: React.MutableRefObject<HTMLDivElement | null>, cb: Function) {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event: { target: React }) {
      if (ref.current && !ref.current.contains(event.target)) {
        // alert("You clicked outside of me!");
        cb();
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
}

const Add: FC<Props> = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);
  useOutsideAlerter(ref, () => setIsExpanded(false));
  return isExpanded ? (
    <div
      ref={ref}
      style={{ background: "#0000ff22", display: "flex", flexDirection: "row" }}
      onBlur={() => console.log("BLUR")}
    >
      {ALL_SECTION_TYPES.map((type) => (
        <TypeThumbnail key={type} type={type} />
      ))}
    </div>
  ) : (
    <div onClick={() => setIsExpanded(true)}>ADD</div>
  );
};

export default Add;
