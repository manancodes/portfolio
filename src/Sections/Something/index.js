import React from "react";
import styles from "./something.module.css";

export default function Something() {
  return (
    <div className={`container ${styles.container}`}>
      <h1 className={`heading`}>Something</h1>
    </div>
  );
}
