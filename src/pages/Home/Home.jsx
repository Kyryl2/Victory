import { useDispatch } from "react-redux";

import Info from "../../components/Info/Info";
import s from "./Home.module.css";
import { useEffect } from "react";
import { getUkrFood } from "../../redux/products/operations";

import UkrFood from "../../components/UkrFood/UkrFood";
import SideBar from "../../components/SideBar/SideBar";
const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUkrFood());
  }, [dispatch]);

  return (
    <>
      <div className={s.upSide}>
        <SideBar />
        <Info />
      </div>
      <UkrFood />
    </>
  );
};

export default Home;
