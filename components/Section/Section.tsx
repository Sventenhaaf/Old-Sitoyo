import { FC } from "react";
import styles from "@/styles/Section.module.css";

interface Props {
  section: SECTION;
}

const Section: FC<Props> = ({ section }) => {
  return (
    <section className={`${styles.section} ${styles.editmode}`}>
      <div>Section</div>
      <div>{section.type}</div>
    </section>
  );
};

export default Section;
