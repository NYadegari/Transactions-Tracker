import React, { useContext, useState } from "react";
import styles from "./navbar.module.scss";
import { NavLink, Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { IoLogInOutline } from "react-icons/io5";
import { FaUserCheck } from "react-icons/fa6";
import { BsMenuUp  } from "react-icons/bs";

const Navbar = () => {
  const { auth } = useContext(AuthContext);
  const [menuState, setMenuState] = useState(""); 

  const toggleMenu = () => {
    if (menuState === "show") {
      setMenuState("");
      setTimeout(() => setMenuState("hide"), 1);
    } else {
      setMenuState("show");
    }
  };

  return (
    <div className={styles.container}>
      <h1>Transaction Tracker</h1>
      <nav>
        <ul className={`${styles.navItems} ${menuState === "show" ? styles.show : menuState === "hide" ? styles.hide : ""}`}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "font-bold text-white" : "text-gray-300 font-medium"
              }
              onClick={() => setMenuState("hide")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/wallet"
              className={({ isActive }) =>
                isActive ? "font-bold text-white" : "text-gray-300 font-medium"
              }
              onClick={() => setMenuState("hide")}
            >
              Wallet
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/diagram"
              className={({ isActive }) =>
                isActive ? "font-bold text-white" : "text-gray-300 font-medium"
              }
              onClick={() => setMenuState("hide")}
            >
              Diagram
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className={styles.navIcons}>
        {auth ? (
          <div className="flex">
            <div className={styles.authName}>{auth.user}</div>
            <FaUserCheck color="white" className={styles.userIcon} />
          </div>
        ) : (
          <Link to="/login">
            <IoLogInOutline fontSize={28} color="white" />
          </Link>
        )}
        <BsMenuUp className={styles.menuIcon} onClick={toggleMenu} />
      </div>
    </div>
  );
};

export default Navbar;
