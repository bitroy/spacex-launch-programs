import styles from "styles/FilterButton.module.css";
import React from "react";

const FilterButton = ({ name, active }) => {
  return (
    <>
      {active ? (
        <div className={styles.filter_button}>
          <div className={styles.button_active}>{name}</div>
        </div>
      ) : (
        <div className={styles.filter_button}>
          <div className={styles.button}>{name}</div>
        </div>
      )}
    </>
  );
};

export default FilterButton;
