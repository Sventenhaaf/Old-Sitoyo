import { FC, useContext } from "react";
import Editable from "../Editable";
import { StoreContext } from "@/store/Store";

interface Props {
  section: TITLE_SECTION;
}

const Title: FC<Props> = ({ section }) => {
  const { title, subTitle } = section;
  const { updateSection } = useContext(StoreContext);

  const onUpdate = (key: keyof TITLE_SECTION, value: string) => {
    updateSection(section.id, { ...section, [key]: value });
  };

  return (
    <section>
      <Editable value={title} onUpdate={(value) => onUpdate("title", value)}>
        <h2>{title}</h2>
      </Editable>
      {subTitle && <h4>{subTitle}</h4>}
    </section>
  );
};

export default Title;
