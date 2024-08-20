import { useState } from "react";
import s from "./Sidebar.module.css";
import clsx from "clsx";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
const SideBar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <>
      <BurgerMenu toggleSidebar={toggleSidebar} />
      <div className={clsx(s.sidebar, isSidebarOpen ? s.active : "")}>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default SideBar;
