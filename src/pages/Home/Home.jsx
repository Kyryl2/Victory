import BurgerMenu from "../../components/BurgerMenu/BurgerMenu";
import s from "./Home.module.css";

const Home = () => {
  return (
    <>
      <div className={s.upSide}>
        <BurgerMenu />
        <div className={s.mainDiv}>
          <p>
            Welcome to [Restaurant Victory], where the rich traditions of
            Ukrainian cuisine meet the vibrant flavors of sushi and pizza! Our
            menu features a delightful array of authentic Ukrainian dishes,
            crafted with love and the freshest ingredients. From hearty borscht
            to creative sushi rolls, we offer a unique dining experience that
            celebrates diverse culinary influences. Enjoy our delicious
            offerings knowing that 20% of every purchase supports the Ukrainian
            military. Thank you for dining with us and contributing to a noble
            cause!
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
