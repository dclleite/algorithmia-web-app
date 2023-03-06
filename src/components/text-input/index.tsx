import React, { useState, ChangeEvent } from "react";
import styles from "./styles.module.css";

const Input = ({ placeholder, onChange, name, ...rest }: React.InputHTMLAttributes<HTMLInputElement>) => {
  const [isActive, setIsActive] = useState(false);

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    if (event.target.value) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }

    if (onChange) {
      onChange(event);
    }
  }

  return (
    <div className={styles.inputContainer}>
      <input
        className={styles.inputField}
        onChange={handleInputChange}
        name={name}
        {...rest}
      />
      <label
        className={`${styles.inputLabel} ${isActive ? styles.active : ""}`}
        htmlFor={name}
      >
        {placeholder}
      </label>
    </div>
  );
}

export default Input;
