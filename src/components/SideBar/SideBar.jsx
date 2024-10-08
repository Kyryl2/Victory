import { useState } from "react";
import s from "./Sidebar.module.css";
import clsx from "clsx";

import { Link } from "react-router-dom";
import { userLogoutThunk } from "../../redux/auth/operations";
import { useDispatch } from "react-redux";

const SideBar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(userLogoutThunk()); // Викликаємо екшен logout
  };
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <>
      <div className={s.div}>
        <button className={s.burger} onClick={toggleSidebar}>
          <div className={s.bar}></div>
          <div className={s.bar}></div>
          <div className={s.bar}></div>
        </button>
      </div>
      <div className={clsx(s.sidebar, isSidebarOpen ? s.active : "")}>
        <ul>
          <li>
            <Link className={s.back} onClick={() => window.history.back()}>
              Back
            </Link>
          </li>
          <li>
            <Link to="/">Another city</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/order">Order</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <ul>
          <li>
            {" "}
            <Link className={s.link} to="/signin">
              SignIn
            </Link>
          </li>
          <li>
            {" "}
            <Link className={s.link} to="/signup">
              SignUp
            </Link>
          </li>
          <li>
            <Link className={s.link} to="/" onClick={handleLogout}>
              Logout
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default SideBar;
