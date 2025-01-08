import React from "react";
import styles from "./experience.module.css";
import { getImageUrl } from "../../util";
import skills from "../../data/skills.json";
import history from "../../data/history.json";

const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skills, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <a href={skills.link} target="blank">
                  <img src={getImageUrl(skills.imageSrc)} alt={skills.title} />
                  </a>
                </div>
                <p>{skills.title}</p>
              </div>
            );
          })}
        </div>
        <ul className={styles.history}>
          {history.map((historyItem, id) => {
            return (
              <li key={id} className={styles.historyItem}>
                <img
                  src={getImageUrl(historyItem.imageSrc)}
                  alt={`${historyItem.role} ${historyItem.organisation}`}
                />
                <div className={styles.historyItemDetails}>
                  <h3>{`${historyItem.role} at ${historyItem.organisation}`}</h3>
                  <p>{`${historyItem.startDate} at ${historyItem.endDate}`}</p>
                  <ul>
                    {historyItem.experiences.map((exp, id) => {
                      return <li key={id}>{exp}</li>;
                    })}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
export default Experience;
