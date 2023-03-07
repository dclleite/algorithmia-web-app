import React, { useState, ChangeEvent } from "react";
import styles from "./styles.module.css";

const Textarea = ({ placeholder, onChange, name, ...rest }: React.TextareaHTMLAttributes<HTMLTextAreaElement>) => {
  const [isActive, setIsActive] = useState(false);

  function handleInputChange(event: ChangeEvent<HTMLTextAreaElement>) {
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
      <textarea
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

export default Textarea;
