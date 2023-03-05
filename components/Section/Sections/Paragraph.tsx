import { FC, useContext } from "react";
import Editable from "../Editable";
import { StoreContext } from "@/store/Store";

interface Props {
  section: PARAGRAPH_SECTION;
}

const Paragraph: FC<Props> = ({ section }) => {
  const { text } = section;
  const { updateSection } = useContext(StoreContext);

  const onUpdate = (key: keyof PARAGRAPH_SECTION, value: string) => {
    updateSection(section.id, { ...section, [key]: value });
  };

  return (
    <section>
      <Editable value={text} onUpdate={(value) => onUpdate("text", value)}>
        <p>{text}</p>
      </Editable>
    </section>
  );
};

export default Paragraph;
