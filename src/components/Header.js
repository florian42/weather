import React from "react";
import styles from "./Header.module.css";

const header = props => {
  return (
    <header
      className={styles["Header"]}
      style={{ backgroundColor: props.color }}
    />
  );
};

export default header;
