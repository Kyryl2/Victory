import { useDispatch, useSelector } from "react-redux";
import { selectPizzas } from "../../redux/products/selectors";
import s from "./Pizza.module.css";
import { addToCartThunk } from "../../redux/order/operations";
import QuantityInput from "../QuantityInput/QuantityInput";
import { useState } from "react";
const Pizza = () => {
  const dispatch = useDispatch();
  const pizzas = useSelector(selectPizzas);
  const [quantities, setQuantities] = useState(
    pizzas.reduce((acc, food) => {
      acc[food._id] = 1; // Встановлюємо значення 1 за замовчуванням для кожного продукту
      return acc;
    }, {})
  );

  const handleQuantityChange = (id, value) => {
    // Оновлюємо стан відповідно до введеного значення або видаляємо, якщо значення порожнє
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: value === "" ? "" : Math.max(1, parseInt(value, 10) || 1), // parseInt і Math.max гарантують значення >= 1
    }));
  };

  const handleIncrease = (id) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: prevQuantities[id] + 1,
    }));
  };

  const handleDecrease = (id) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: Math.max(1, prevQuantities[id] - 1),
    }));
  };

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
            <div className={s.controls}>
              <QuantityInput
                quantity={quantities[food._id]}
                onIncrease={() => handleIncrease(food._id)}
                onDecrease={() => handleDecrease(food._id)}
                onChange={(e) => handleQuantityChange(food._id, e.target.value)}
              />
              <button
                onClick={() => {
                  dispatch(
                    addToCartThunk({
                      name: food.name,
                      description: food.description,
                      price: food.price,
                      img: food.img,
                      quantity: quantities[food._id] || 1, // Використовуємо кількість з стану або 1, якщо значення порожнє
                    })
                  );
                }}
                className={s.addToOrderButton}
              >
                Add to order
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pizza;
