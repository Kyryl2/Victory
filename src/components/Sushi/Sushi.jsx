import { useDispatch, useSelector } from "react-redux";
import { selectSushi } from "../../redux/products/selectors";
import s from "./Sushi.module.css";
import { addToCartThunk } from "../../redux/order/operations";
import { useState } from "react";
const Sushi = () => {
  const sushi = useSelector(selectSushi);
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
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
                value={quantity}
                onChange={handleQuantityChange}
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
