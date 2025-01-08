import React from 'react'
import projects from '../../data/projects.json'
import styles from './project.module.css'
import ProjectCard from './ProjectCard'
const Project = () => {
  return (
    <section id='projects' className={styles.container}>
        <h2 className={styles.container}>Projects</h2>
        <div className={styles.projects}>
            {
                projects.map((project, id)=>{
                    return (
                        <ProjectCard key={id} project={project}/>
                    )
                })
            }
        </div>
    </section>
  )
}

export default Project
