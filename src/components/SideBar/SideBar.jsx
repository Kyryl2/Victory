import { useState } from "react";
import s from "./Sidebar.module.css";
import clsx from "clsx";
import Burger from "../Burger/Burger";
import { Link } from "react-router-dom";
const SideBar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <>
      <Burger toggleSidebar={toggleSidebar} />
      <div className={clsx(s.sidebar, isSidebarOpen ? s.active : "")}>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Order</a>
          </li>
          <li>
            <a href="#">Contact</a>
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
