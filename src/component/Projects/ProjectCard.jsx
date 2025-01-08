import React from "react";
import {getImageUrl} from '../../util'
import styles from './projectCard.module.css'

const ProjectCard = ({ project : {title,imageSrc,description,demo,source,skills} }) => {
  return (
    <div className={styles.container}>
      <img
        src={getImageUrl(imageSrc)}
        alt={`Image of ${title}`}
        className={styles.image}
      />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <ul className={styles.skills}>
        {skills.map((skill, id) => {
          return <li className={styles.skill} key={id}>{skill}</li>;
        })}
      </ul>
      <div className={styles.links}>
        <a href={demo} target="blank" className={styles.link}>
          Demo{" "}
        </a>
        <a  className={styles.link} href={source} target="blank" >Source</a>
      </div>
    </div>
  );
};

export default ProjectCard;
