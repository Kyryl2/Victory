import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import s from "./Order.module.css";
import {
  checkoutThunk,
  fetchCartThunk,
  removeFromCartThunk,
} from "../../redux/order/operations";
import {
  selectCartError,
  selectCartItems,
  selectCartTotal,
} from "../../redux/order/selectors";

const Order = () => {
  const dispatch = useDispatch();
  const items = useSelector(selectCartItems);
  console.log(items);

  const total = useSelector(selectCartTotal);
  const error = useSelector(selectCartError);

  useEffect(() => {
    dispatch(fetchCartThunk());
  }, [dispatch]);

  const handleRemove = (productName) => {
    dispatch(removeFromCartThunk(productName));
  };

  const handleCheckout = () => {
    dispatch(checkoutThunk());
  };

  if (status === "loading") return <p>Loading...</p>;
  if (status === "failed") return <p>Error: {error}</p>;

  return (
    <div className={s.orderContainer}>
      <h1 className={s.title}>Your Order</h1>
      <ul className={s.itemList}>
        {items.length === 0 ? (
          <p className={s.emptyCart}>Your cart is empty</p>
        ) : (
          items.map((item) => (
            <li key={item._id} className={s.item}>
              <img src={item.img} alt={item.name} className={s.itemImage} />
              <div className={s.itemDetails}>
                <h3 className={s.itemName}>{item.name}</h3>
                <p className={s.itemQuantity}>Quantity: {item.quantity}</p>
                <p className={s.itemPrice}>Price: ${item.price}</p>
                <button
                  onClick={() => handleRemove(item.name)}
                  className={s.removeButton}
                >
                  Remove
                </button>
              </div>
            </li>
          ))
        )}
      </ul>
      {items.length > 0 && (
        <div className={s.totalSection}>
          <h2 className={s.total}>Total: ${total.toFixed(2)}</h2>
          <button onClick={handleCheckout} className={s.checkoutButton}>
            Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default Order;
