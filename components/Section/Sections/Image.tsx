import { FC, useContext } from "react";
import Editable from "../Editable";
import { StoreContext } from "@/store/Store";

interface Props {
  section: IMAGE_SECTION;
}

const Image: FC<Props> = ({ section }) => {
  const { imgUrl, description } = section;
  const { updateSection } = useContext(StoreContext);

  const onUpdate = (key: keyof IMAGE_SECTION, value: string) => {
    updateSection(section.id, { ...section, [key]: value });
  };

  return (
    <section>
      <img src={imgUrl} style={{ maxHeight: "50vh" }} />
      {description && <div>{description}</div>}
    </section>
  );
};

export default Image;
