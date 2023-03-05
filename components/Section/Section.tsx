import { FC } from "react";
import styles from "@/styles/Section.module.css";
import Title from "./Sections/Title";
import Paragraph from "./Sections/Paragraph";
import Image from "./Sections/Image";

interface Props {
  section: SECTION;
}

const Section: FC<Props> = ({ section }) => {
  switch (section.type) {
    case "title": {
      return <Title section={section} />;
    }
    case "paragraph": {
      return <Paragraph section={section} />;
    }
    case "image": {
      return <Image section={section} />;
    }
  }
  return (
    <section className={`${styles.section} ${styles.editmode}`}>
      <div>Section</div>
      {/* <div>{section.type}</div> */}
    </section>
  );
};

export default Section;
