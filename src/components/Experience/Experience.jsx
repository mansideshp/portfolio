import React from 'react'
import { getImageUrl } from "../../utils";
import styles from "./Experience.module.css";

const Experience = () => {
  return (
   <section className={styles.container} id='experience' >
   <h2 className={styles.title} >Skills</h2>
   <div className={styles.aboutdiv}>
    <ul className={styles.aboutItems} >
        <li className={styles.aboutItem}><img src= {getImageUrl("skills/html.png")} alt='html'/>
        <p>Html</p></li>
        <li className={styles.aboutItem}><img src= {getImageUrl("skills/css.png")} alt='css'/>
        <p>CSS</p></li>
        <li className={styles.aboutItem}><img src= {getImageUrl("skills/javascript.jpeg")} alt='figma'/>
        <p>JS</p></li>
        <li className={styles.aboutItem}><img src= {getImageUrl("skills/react.png")} alt='react'/>
        <p>React</p></li>
        <li className={styles.aboutItem}><img src= {getImageUrl("skills/Nextjs.jpeg")} alt='html'/>
        <p>Next JS</p></li>
        <li className={styles.aboutItem}><img src= {getImageUrl("skills/MU.jpeg")} alt='css'/>
        <p>MUI</p></li>
        <li className={styles.aboutItem}><img src= {getImageUrl("skills/Redux.jpeg")} alt='figma'/>
        <p>Redux</p></li>
        <li className={styles.aboutItem}><img src= {getImageUrl("skills/Tailwind.jpeg")} alt='react'/>
        <p>Tailwind</p></li>


    </ul>
   </div>
  
   <h2 className={styles.title} >Experience</h2>
   <div className={styles.aboutItemText} >
   
   <img className={styles.aboutItemPic} src={getImageUrl("history/wiprologo.png")} alt="google"/>
   <div  className={styles.line} ></div>
            <div  className={styles.aboutItemDescription} >
              <h3 >Project Engineer, Wipro - (Aug,2021-Present) </h3>
              
              <ul>
                <li>Worked as a web developer</li>
                <li>Helped create UI Components</li>
                
              </ul>
            </div>
   </div>

   </section>
  )
}

export default Experience