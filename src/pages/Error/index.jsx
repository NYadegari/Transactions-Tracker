import React from "react";
import { Link } from "react-router-dom";
import styles from "./error.module.scss";
import { useRouteError, isRouteErrorResponse } from "react-router-dom";

const Error = () => {
  const error = useRouteError();

  return (
    <div className={styles.errorPage}>
      <div className={styles.content}>
        <h1>Error!! </h1>
        {error?.status ? <span>{error.status}</span> : null}
        <p>
          {isRouteErrorResponse(error)
            ? "The page you are looking for does not exist"
            : "Something has wrong!"}
        </p>
        <Link className={styles.link} to="/">
          Back to home page
        </Link>
      </div>
      <div className={styles.img} />
    </div>
  );
};

export default Error;
