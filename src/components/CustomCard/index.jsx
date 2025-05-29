import React from "react";
import styles from "./customcard.module.scss";

const CustomCard = ({ children }) => {
  return <div className={styles.card}>{children}</div>;
};

export default CustomCard;
