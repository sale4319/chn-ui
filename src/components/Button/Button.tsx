import React from "react";
import styles from "./Button.module.css";

export interface ButtonProps {
  label: string;
}

const Button = ({ label }: ButtonProps) => {
  return <button className={styles.buttonStyles}>{label}</button>;
};

export default Button;
