import { useSelector } from "react-redux";
import { selectPizzas } from "../../redux/products/selectors";
import s from "./Pizza.module.css";
const Pizza = () => {
  const pizzas = useSelector(selectPizzas);
  return (
    <div>
      <ul className={s.imageList}>
        {pizzas.map((food) => (
          <li className={s.li} key={food._id}>
            <h3 className={s.name}>{food.name}</h3>
            <p className={s.description}>{food.description}</p>
            <p>{food.price}$</p>
            <div className={s.photoBox}>
              <img src={food.img} className={s.img} />
              <div className={s.overlay}></div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pizza;
