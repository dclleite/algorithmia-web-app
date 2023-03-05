import React, { ReactNode } from "react";
import styles from "./styles.module.css";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
}

function Button({ children, className, ...linkProps }: ButtonProps) {
  return (
    <button {...linkProps} className={`${styles.button} ${className}`}>
      {children}
    </button>
  );
}

export default Button;
