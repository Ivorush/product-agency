import styles from "../styles/Contact.module.css"

import React from 'react'
import Circle from "../components/Circle"

const contact = () => {
  return (
    <div className={styles.container}>
      <div className={`${styles.circle} ${styles.circle1}`} />
      <div className={`${styles.circle} ${styles.circle2}`} />
        <h1 className={styles.title}> GET IN TOUCH</h1>
        <form className={styles.form}>
            <input className={styles.inputS} placeholder= "username"></input>
             <input className={styles.inputS} placeholder= "Phone"></input>
              <input className={styles.inputL} placeholder= "Email"></input>
               <input className={styles.inputL} placeholder= "Subject"></input>
               <textarea className={styles.textArea} placeholder= "Message" rows={6}/>
               <button className= { styles.button}>SUBMIT </button>

        </form>
    </div>
  )
}

export default contact