import clsx from "clsx";
import s from "./Hello.module.css";
import { Link } from "react-router-dom";
import Contacts from "../../components/Contacts/Contacts";
const Hello = () => {
  return (
    <>
      <div className={s.container}>
        <div className={clsx(s.image, s.image1)}>
          <Link to="/home" className={s.imageLink}>
            Tokyo
          </Link>
        </div>
        <div className={clsx(s.image, s.image2)}>
          <Link to="/home" className={s.imageLink}>
            Napoli
          </Link>
        </div>
      </div>
      <Contacts />
    </>
  );
};

export default Hello;