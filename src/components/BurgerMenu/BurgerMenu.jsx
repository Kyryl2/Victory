import { GiHamburgerMenu } from "react-icons/gi";
import s from "./BurgerMenu.module.css";
const BurgerMenu = () => {
  return (
    <div className={s.div}>
      <GiHamburgerMenu />
    </div>
  );
};

export default BurgerMenu;
