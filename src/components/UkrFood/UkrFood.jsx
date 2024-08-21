import { useSelector } from "react-redux";
import { selectAllUkrFood } from "../../redux/products/selectors";
import s from "./UkrFood.module.css";
const UkrFood = () => {
  const ukrfood = useSelector(selectAllUkrFood);

  return (
    <div>
      <ul className={s.imageList}>
        {ukrfood.map((food) => (
          <li className={s.li} key={food.id}>
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

export default UkrFood;
