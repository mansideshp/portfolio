import React from "react";
import styles from "./Project.module.css";
import { data } from "./Data";

const Projects = () => {
  return (
    <section className={styles.container} id="project">
      <h2 className={styles.title}>Projects</h2>
     <div className={styles.paragraph}> {data.map((e) => {
        return (
          
            <div className={styles.minipara}>
              <img className={styles.img} src={e.image} />
              <h3>{e.name}</h3>
              <p>{e.description}</p>
              <p>
                <button className={styles.btn}><a href={e.url} target="_blank">View</a></button>
              </p>
            </div>
          
        );
      })}</div>
    </section>
  );
};

export default Projects;
