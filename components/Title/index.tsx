import React from "react";
import styles from "./Title.module.css";

type TitleProps = {
  level: number;
  color?: string;
  text: string;
  className?: string;
};

const Title: React.FC<TitleProps> = ({ level, color, text, className }) => {
  return (
    <header
      className={` ${styles.title} ${styles[`h${level}`]} ${className}`}
      style={{ color: color }}
    >
      {text}
    </header>
  );
};

export default Title;
