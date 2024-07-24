import React from 'react'
import { getImageUrl } from '../../utils'
import styles from './Hero.module.css'

const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hey, I am Mansi Deshpande</h1>
            <p className={styles.description}>A Front-End Developer with 3 years of experience in ReactJS. Reach out to me if you would want to know more.</p>
            <a href='mailto:mansideshpande2k@gmail.com' className={styles.contactbtn}>Contact Me</a>
        </div>
        <img src={getImageUrl("hero/beautiful.jpeg")} alt='myphoto' className={styles.heroImg}/>
        <div className={styles.topBlur}/>
        <div className={styles.bottomBlur}/>
    </section>
  )
}

export default Hero