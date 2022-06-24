import React from "react";
import styles from "./hero.module.css";
import Manan from "../../Assets/manan1.png";
// import Dots from "../../Assets/dots.svg";
import Spline from "@splinetool/react-spline";

export default function Hero() {
  return (
    <div className={`container ${styles.container}`}>
      <div className={`${styles.leftContainer} center`}>
        <h2 className={styles.logo}>Manan.</h2>
        <div className={`${styles.headingContainer}`}>
          <h1 className={`heading`}>
            This is <br /> not a boring <br />
            portfolio website
          </h1>
        </div>
        <div>
          <h2 className={`subHeading ${styles.subHeadings}`}>
            Full Stack Developer
            <br />
            <span className={styles.fromText}> From</span>{" "}
            <span className={styles.indiaText}>INDIA</span>
          </h2>
        </div>
      </div>
      <div className={`${styles.rightContainer} center`}>
        <Spline scene="https://prod.spline.design/NUMso8sARaJ7pssC/scene.splinecode" />
      </div>
    </div>
  );
}
