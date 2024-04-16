import React from 'react';
import styles from './conv.module.css';

function Conversation() {
  return (
    <div className={styles.conversation}>
      <p className={styles.heading}>Chat Groups</p>
      <div className={styles.group}>Friends</div>
      <div className={`${styles.group} ${styles.active}`}>Learn React</div>
      <div className={styles.group}>Group 3</div>
    </div>
  );
}

export default Conversation;
