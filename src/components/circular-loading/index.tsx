import React from 'react';
import styles from "./styles.module.css";

interface Props {
  size: string;
  color: string;
}

const CircularLoading = ({ size, color }: Props) => {
  return (
    <div className={styles.container}>
      <span
        className={styles.circular_loading}
        style={{ width: size, height: size, borderTopColor: color }}
      />
      <p className={styles.label}>wait...</p>
    </div>

  );
};

export default CircularLoading;
