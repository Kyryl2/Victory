import { useDispatch, useSelector } from "react-redux";
import { selectSushi } from "../../redux/products/selectors";
import s from "./Sushi.module.css";
import { addToCartThunk } from "../../redux/order/operations";
import { useState } from "react";

const Sushi = () => {
  const sushi = useSelector(selectSushi);
  const dispatch = useDispatch();

  // Ініціалізація стану кількості для кожного продукту зі значенням 1
  const [quantities, setQuantities] = useState(
    sushi.reduce((acc, food) => {
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

  return (
    <div>
      <ul className={s.imageList}>
        {sushi.map((food) => (
          <li className={s.li} key={food._id}>
            <h3 className={s.name}>{food.name}</h3>
            <p className={s.description}>{food.description}</p>
            <p>{food.price}$</p>
            <div className={s.photoBox}>
              <img src={food.img} className={s.img} />
              <div className={s.overlay}></div>
            </div>
            <div className={s.controls}>
              <input
                type="number"
                min="1"
                value={quantities[food._id]} // Використовуємо кількість з стану
                onChange={(e) => handleQuantityChange(food._id, e.target.value)}
                className={s.quantityInput}
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

export default Sushi;
