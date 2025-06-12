import React, { useState } from "react";
import styles from "./layout.module.scss";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";

const Layout = () => {

  return (
      <div className={styles.layout}>
          <Navbar />
          <Outlet />
      </div>
  );
    
        
};

export default Layout;
 