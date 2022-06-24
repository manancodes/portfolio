import React from "react";
import styles from "./contact.module.css";

export default function Something() {
  return (
    <div className={`container ${styles.container}`}>
      <h1 className={`heading`}>Any questions?</h1>
      <h2 className={`subHeading`}>Feel free to contact me</h2>
    </div>
  );
}
