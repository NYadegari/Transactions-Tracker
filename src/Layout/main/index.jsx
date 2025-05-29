import React, { useState } from "react";
import styles from "./layout.module.scss";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";
import { WalletProvider } from "../../context/WalletContext";

const Layout = () => {

  return (
    <WalletProvider>
      <div className={styles.layout}>
          <Navbar />
          <Outlet />
      </div>
    </WalletProvider>
  );
    
        
};

export default Layout;
 