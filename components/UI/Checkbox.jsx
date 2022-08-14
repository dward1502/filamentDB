import React from "react";

import styles from "./ui.module.scss";

const Checkbox = ({name, id, value, checked}) => {

  return (
    <div className={styles.checkbox}>
      <input
        type="checkbox"
        name={name}
        id={id}
        value={value}
        onChange={checked}
      />
      <label htmlFor={id}>{value}</label>
    </div>
  );
};

export default Checkbox;
