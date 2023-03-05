import { FC } from "react";
import styles from "@/styles/Section.module.css";
import Title from "./Title";

interface Props {
  section: SECTION;
}

const Section: FC<Props> = ({ section }) => {
  switch (section.type) {
    case "title": {
      return <Title section={section} />;
    }
  }
  return (
    <section className={`${styles.section} ${styles.editmode}`}>
      <div>Section</div>
      <div>{section.type}</div>
    </section>
  );
};

export default Section;
