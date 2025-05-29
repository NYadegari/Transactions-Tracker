import React  , {useContext} from "react";
import styles from "./navbar.module.scss";
import { NavLink, Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext"
import { IoLogInOutline } from "react-icons/io5";

const Navbar = () => {
  const {auth} = useContext(AuthContext);
  return (
    <div className={styles.container}>
      <h1>Expense Tracking</h1>
      <nav>
        <ul className={styles.navItems}>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "font-bold text-white " : "text-gray-300 font-medium"
              }
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "font-bold text-white" : "text-gray-300 font-medium"
              }
              to="/wallet"
            >
              Wallet
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "font-bold text-white " : "text-gray-300 font-medium"
              }
              to="/diagram"
            >
              diagram
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className={styles.navIcons}>
        {auth ? <div>{auth.user}</div> :
         <Link to="/login">
          <IoLogInOutline fontSize={34} color="white"/>
         </Link>
         }
      </div>
    </div>
  );
};

export default Navbar;
