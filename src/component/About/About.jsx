import React from "react";
import styles from "./about.module.css";
import { getImageUrl } from "../../util";

const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
            <li className={styles.aboutItem}>
                <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
                <div className={styles.aboutItemText}>
                    <h3>Web Developer</h3>
                    <p>I'm a Frontend developer with experience in building <b>responsive </b> and <b>optimized sites</b></p>
                </div>
            </li>
            <li className={styles.aboutItem}>
                <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
                <div className={styles.aboutItemText}>
                    <h3>Mobile App Developer</h3>
                    <p>I'm a Frontend developer with experience in building Hybrid <b>responsive </b> and <b>optimized Mobile Apps</b></p>
                </div>
            </li>
            <li className={styles.aboutItem}>
                <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
                <div className={styles.aboutItemText}>
                    <h3>Backend Developer</h3>
                    <p>I am also a Backend Developer who have done a lot of Backend taks as well</p>
                </div>
            </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
