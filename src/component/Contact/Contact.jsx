import React from 'react'
import styles from './contact.module.css'
import {getImageUrl} from '../../util'

const Contact = () => {
  return (
    <footer id='contact' className={styles.container}>
        <div className={styles.text}>
            <h2>Contact</h2>
            <p>Feel free to reach out</p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <img src={getImageUrl("contact/emailIcon.png")} alt="E-Mail" />
                <a href="mailto:mithusharma67890@gmail.com">Mail me</a>
            </li>

            <li className={styles.link}>
                <img src={getImageUrl("contact/linkedinIcon.png")} alt="Linkedin" />
                <a href="https://www.linkedin.com/in/tushar-sharma-11b51428a">Tushar-Sharma</a>
            </li>

            <li className={styles.link}>
                <img src={getImageUrl("contact/githubIcon.png")} alt="gitHub Icon" />
                <a href="https://github.com/tushar6905">tushar6905</a>
            </li>
        </ul>
    </footer>
  )
}

export default Contact
