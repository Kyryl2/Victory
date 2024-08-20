import { GiHamburgerMenu } from "react-icons/gi";
import s from "./BurgerMenu.module.css";
// eslint-disable-next-line react/prop-types
const BurgerMenu = ({ toggleSidebar }) => {
  return (
    <>
      <div className={s.div}>
        <button className={s.burger} onClick={toggleSidebar}>
          <GiHamburgerMenu />
        </button>
      </div>
    </>
  );
};

export default BurgerMenu;
