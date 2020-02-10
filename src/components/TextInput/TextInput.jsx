import React from "react";

import styles from "./TextInput.module.css";

const TextInput = ({ name, label, error, width, fontSize, ...rest }) => {
  return (
    <div className={styles.wrapper}>
      <label htmlFor={name} className={styles.label} style={{ fontSize }}>
        {label}
      </label>
        <input
          {...rest}
          name={name}
          id={name}
          className={styles.input}
          style={{ width, fontSize }}
        />
      
      {error && (
        <div style={{ width, fontSize }} className={styles.errorMsg}>
          {error}
        </div>
      )}
    </div>
  );
};

export default TextInput;
