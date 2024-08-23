import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import styles from "./Order.module.css";
import {
  checkoutThunk,
  fetchCartThunk,
  removeFromCartThunk,
} from "../../redux/order/operations";
import { selectCartItems } from "../../redux/order/selectors";

const Order = () => {
  const dispatch = useDispatch();
  const { items, total, status, error } = useSelector(selectCartItems);

  useEffect(() => {
    dispatch(fetchCartThunk());
  }, [dispatch]);

  const handleRemove = (productId) => {
    dispatch(removeFromCartThunk(productId));
  };

  const handleCheckout = () => {
    dispatch(checkoutThunk());
  };

  if (status === "loading") return <p>Loading...</p>;
  if (status === "failed") return <p>Error: {error}</p>;

  return (
    <div className={styles.orderContainer}>
      <h1 className={styles.title}>Your Order</h1>
      <ul className={styles.itemList}>
        {items.length === 0 ? (
          <p className={styles.emptyCart}>Your cart is empty</p>
        ) : (
          items.map((item) => (
            <li key={item.product._id} className={styles.item}>
              <img
                src={item.product.image}
                alt={item.product.name}
                className={styles.itemImage}
              />
              <div className={styles.itemDetails}>
                <h3 className={styles.itemName}>{item.product.name}</h3>
                <p className={styles.itemQuantity}>Quantity: {item.quantity}</p>
                <p className={styles.itemPrice}>Price: ${item.product.price}</p>
                <button
                  onClick={() => handleRemove(item.product._id)}
                  className={styles.removeButton}
                >
                  Remove
                </button>
              </div>
            </li>
          ))
        )}
      </ul>
      {items.length > 0 && (
        <div className={styles.totalSection}>
          <h2 className={styles.total}>Total: ${total.toFixed(2)}</h2>
          <button onClick={handleCheckout} className={styles.checkoutButton}>
            Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default Order;
