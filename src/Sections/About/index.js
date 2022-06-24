import React from "react";
import styles from "./about.module.css";
import Hello from "../../Assets/hello.png";

import CTA from "../../Components/CTA";

export default function About() {
  return (
    <div className={`container ${styles.container}`}>
      <h1 className={`heading`}>
        Hey There! I'm Manan. <img src={Hello} alt="helloeemoji" />
      </h1>
      <p className={styles.paragraph}>
        22 years old, passionate and self-learned fullstack developer trying to
        make programming fun for everybody. From the last 4 years I've been
        working on scalable client projects and making pixel perfect deliveries.
        Always looking for new challenges to work as a Developer. I'd love to
        hear from you to see how we might work together.
      </p>
      <CTA />
    </div>
  );
}
