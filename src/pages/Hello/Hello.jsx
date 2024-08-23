import clsx from "clsx";
import s from "./Hello.module.css";
import { Link } from "react-router-dom";
import Contacts from "../../components/ContactsComponent/ContactsComponent";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  getPizzas,
  getSushi,
  getUkrFood,
} from "../../redux/products/operations";
const Hello = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUkrFood());
    dispatch(getPizzas());
    dispatch(getSushi());
  }, [dispatch]);
  return (
    <>
      <div className={s.container}>
        <div className={clsx(s.image, s.image1)}>
          <Link to="/tokyo" className={s.imageLink}>
            Tokyo
          </Link>
        </div>
        <div className={clsx(s.image, s.image2)}>
          <Link to="/napoli" className={s.imageLink}>
            Napoli
          </Link>
        </div>
      </div>
      <Contacts />
    </>
  );
};

export default Hello;
