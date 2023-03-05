import React, { useState, ChangeEvent } from "react";
import styles from "./styles.module.css";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

function Input({ label, onChange, name, ...rest }: InputProps) {
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
        {label}
      </label>
    </div>
  );
}

export default Input;
