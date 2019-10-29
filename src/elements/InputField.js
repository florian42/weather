import React from "react";
import styles from "./InputField.module.css";

const inputField = props => {
  return (
    <div className={styles["InputFieldWrapper"]}>
      <label>props.label</label>
      <input
        type={props.type}
        id={props.name}
        name={props.name}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.handleChange}
        required
      />
    </div>
  );
};

export default inputField;
