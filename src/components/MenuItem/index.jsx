import React from "react";
import styles from "./menuItem.module.scss";

const MenuItem = ({ title, subtitle, imageUrl, onClick }) => {
  return (
    <div className={styles.wrapper} onClick={onClick}>
      <div
        className={styles.backgroundImage}
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className={styles.content}>
        <h3>{title}</h3>
        <p>{subtitle}</p>
      </div>
    </div>
  );
};

export default MenuItem;
