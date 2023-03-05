import { ALL_SECTION_TYPES } from "@/config/config";
import { FC, useContext, useRef, useState } from "react";
import { useOnClickOutside } from "@/hooks";
import { StoreContext } from "@/store/Store";

interface Props {
  nextId: number | null;
  page: PAGE;
}

const TitleThumbnail = () => {
  return (
    <div>
      <div>Title</div>
      <div>Subitle</div>
    </div>
  );
};

const TypeThumbnail: FC<{ type: SECTION_TYPE; onClick: () => void }> = ({ type, onClick }) => {
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
  return (
    <div onClick={onClick} style={{ padding: 10, borderRadius: 4, border: "1px solid gray" }}>
      {renderThumbnail()}
    </div>
  );
};

const getNewId = () => Math.round(Math.random() * 1000_000);

const getTitleTemplate: () => TITLE_SECTION = () => ({
  id: getNewId(),
  type: "title",
  title: "Title",
  subTitle: "Subtitle",
});

const getImageTemplate: () => IMAGE_SECTION = () => ({
  id: getNewId(),
  type: "image",
  imgUrl:
    "https://images.unsplash.com/photo-1676995278388-6e899b1d5fab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
  description: "description",
});

const getParagraphTemplate: () => PARAGRAPH_SECTION = () => ({
  id: getNewId(),
  type: "paragraph",
  text: "Some text",
});

const Add: FC<Props> = ({ nextId, page }) => {
  const { addSection } = useContext(StoreContext);
  const [isExpanded, setIsExpanded] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);
  useOnClickOutside(ref, () => setIsExpanded(false));

  const add = (type: SECTION_TYPE) => {
    const newSection =
      type === "image" ? getImageTemplate() : type === "paragraph" ? getParagraphTemplate() : getTitleTemplate();
    addSection(page.id, newSection, nextId);
    setIsExpanded(false);
  };

  return isExpanded ? (
    <div ref={ref} style={{ background: "#0000ff22", display: "flex", flexDirection: "row" }}>
      {ALL_SECTION_TYPES.map((type) => (
        <TypeThumbnail key={type} type={type} onClick={() => add(type)} />
      ))}
    </div>
  ) : (
    <div onClick={() => setIsExpanded(true)}>ADD</div>
  );
};

export default Add;
