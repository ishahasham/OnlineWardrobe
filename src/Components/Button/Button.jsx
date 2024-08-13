import React from 'react';
import styles from './button.module.css';

const Button = ({ text, icon }) => {
  return (
    <button className={styles.button}>
      {icon && <span className={styles.icon1}>{icon}</span>}
      {text}
    </button>
  );
}

export default Button;
