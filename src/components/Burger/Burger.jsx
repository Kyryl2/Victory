import s from "./Burger.module.css";
// eslint-disable-next-line react/prop-types
const BurgerMenu = ({ toggleSidebar }) => {
  return (
    <>
      <div className={s.div}>
        <button className={s.burger} onClick={toggleSidebar}>
          <div className={s.bar}></div>
          <div className={s.bar}></div>
          <div className={s.bar}></div>
        </button>
      </div>
    </>
  );
};

export default BurgerMenu;
