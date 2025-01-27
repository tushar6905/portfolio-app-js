import React from 'react'
import {getImageUrl} from '../../util'
import styles from './hero.module.css'
const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>
                Hi, I'm Tushar Sharma
            </h1>
            <p className={styles.description}>
                I'm a front-end developer who can build Websites and Hybrid Mobile Apps using React JS and React Native. Soon going to become a full-stack developer 
            </p>
            <div className={styles.resumeMail}>
            <a href="mailto:mithusharma67890@gmail.com"className={styles.contactBtn} target='blank'>Contact Me</a>
            <a style={{marginLeft:10}} href="https://drive.google.com/file/d/1RNQxzbByueHG5J8FH6fTn38uKIjq9053/view"className={styles.contactBtn} target='blank'>My Resume</a>
            </div>
        </div>
        <img src={getImageUrl("hero/heroImage.png")} alt="My Image" className={styles.heroImg} />
        <div className={styles.topBlur} />
        <div className={styles.bottomBlur} />
    </section>
  )
}

export default Hero
