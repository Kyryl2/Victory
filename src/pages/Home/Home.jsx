import Info from "../../components/Info/Info";
import s from "./Home.module.css";

import UkrFood from "../../components/UkrFood/UkrFood";
import SideBar from "../../components/SideBar/SideBar";
import Pizza from "../../components/Pizza/Pizza";
import Sushi from "../../components/Sushi/Sushi";
const Home = () => {
  return (
    <>
      <div className={s.upSide}>
        <SideBar />
        <Info />
      </div>
      {/* <UkrFood />
       */}
      {/* <Pizza />
       */}
      <Sushi />
    </>
  );
};

export default Home;
