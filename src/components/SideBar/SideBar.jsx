import { useState } from "react";
import s from "./Sidebar.module.css";
import clsx from "clsx";

import { Link } from "react-router-dom";
const SideBar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

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
            <Link to="/">Another city</Link>
          </li>
          <li>
            <Link to="#">About</Link>
          </li>
          <li>
            <Link to="/order">Order</Link>
          </li>
          <li>
            <Link to="#">Contact</Link>
          </li>
        </ul>
        <ul></ul>
        <li>
          {" "}
          <Link to="/signin">SignIn</Link>
        </li>
        <li>
          {" "}
          <Link to="/signup">SignUp</Link>
        </li>
      </div>
    </>
  );
};

export default SideBar;
