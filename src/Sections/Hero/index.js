import React from "react";
import styles from "./hero.module.css";
import Manan from "../../Assets/manan1.png";
// import Dots from "../../Assets/dots.svg";

export default function Hero() {
  return (
    <div className={`container ${styles.container}`}>
      <div className={`${styles.leftContainer} center`}>
        <h2 className={styles.logo}>Manan.</h2>
        <div className={`${styles.headingContainer}`}>
          <h1 className={`heading`}>
            I like to build <br /> applications and <br />
            websites to provide
            <br />
            the best user experience.
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
        <div className={`${styles.imageContainer} circle`}>
          <img
            src={Manan}
            alt="I am Manan"
            style={{
              height: "120%",
            }}
          />
        </div>
      </div>
    </div>
  );
}
