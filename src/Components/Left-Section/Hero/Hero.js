import React from 'react'
import styles from './hero.module.css'
function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.imgDiv}>RR</div>
      <div className={styles.info}>
        <div>
            <h4>Ravi Ranjan</h4>
        </div>
        <div>
            <h5>Online</h5>
        </div>
      </div>
    </div>
  )
}

export default Hero
