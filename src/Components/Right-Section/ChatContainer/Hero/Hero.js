import React from 'react'
import styles from './hero.module.css'

function Hero({userName,message}) {
    const shortForm=userName[0];
    const user_color = { Alan: "lightblue", Bob: "orange", Carol: "lightcyan", Dean: "lightgreen", Elin: "yellow" };

  return (
    <div className={styles.hero}>
      <div style={{backgroundColor:user_color[userName]}} className={styles.imgDiv}>{shortForm}</div>
      <div className={styles.info}>
        <div>
            <h4>{userName}</h4>
            <p className={styles.message}>{message}</p>
        </div>
      </div>
    </div>
  )
}

export default Hero
