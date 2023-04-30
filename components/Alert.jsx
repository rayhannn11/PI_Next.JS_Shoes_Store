import React, { useEffect } from "react";
import styles from "../styles/Alert.module.css";

const Alert = ({ type, msg, removeAlert }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert();
    }, 3000);
    return () => clearTimeout(timeout);
  }, []);
  return (
    <p className={type === "danger" ? styles.alertDanger : styles.alertSuccess}>
      {msg}
    </p>
  );
};

export default Alert;
