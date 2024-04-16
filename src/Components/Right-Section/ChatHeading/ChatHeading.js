import React from 'react';
import styles from "./chat.module.css";

function ChatHeading() {
  return (
    <div className={styles.head}>
      <h1 className={styles.heading}>Learn React</h1>
      <p className={styles.description}>This Group focuses on Learning React by making real world Projects
        <span className={styles.online}>10|100 online</span>
      </p>

    </div>
  );
}

export default ChatHeading;
