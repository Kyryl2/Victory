import { useSelector } from "react-redux";
import { selectSushi } from "../../redux/products/selectors";
import s from "./Sushi.module.css";
const Sushi = () => {
  const sushi = useSelector(selectSushi);
  return (
    <div>
      <ul className={s.imageList}>
        {sushi.map((food) => (
          <li className={s.li} key={food._id}>
            <h3>{food.name}</h3>
            <p>{food.description}</p>
            <p>{food.price}$</p>
            <div className={s.photoBox}>
              <img src={food.img} className={s.img} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sushi;
