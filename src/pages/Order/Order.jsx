import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import s from "./Order.module.css";
import {
  checkoutThunk,
  fetchCartThunk,
  removeFromCartThunk,
  updateCartItemThunk,
} from "../../redux/order/operations";
import {
  selectCartError,
  selectCartItems,
  selectCartTotal,
  selectCartStatus,
} from "../../redux/order/selectors";
import QuantityInput from "../../components/QuantityInput/QuantityInput";
import SideBar from "../../components/SideBar/SideBar";
import FixedButton from "../../components/FixedButton/FixedButton";

const Order = () => {
  const dispatch = useDispatch();
  const items = useSelector(selectCartItems);
  const total = useSelector(selectCartTotal);
  const error = useSelector(selectCartError);
  const status = useSelector(selectCartStatus);

  useEffect(() => {
    dispatch(fetchCartThunk());
  }, [dispatch]);

  const handleRemove = (productName) => {
    dispatch(removeFromCartThunk(productName));
  };

  const handleCheckout = () => {
    dispatch(checkoutThunk());
  };

  const handleQuantityChange = (productName, newQuantity) => {
    if (newQuantity < 1) return; // Prevent setting quantity less than 1
    dispatch(updateCartItemThunk({ name: productName, quantity: newQuantity }));
    setTimeout(() => {
      dispatch(fetchCartThunk());
    }, 500);
    dispatch(fetchCartThunk());
  };

  if (status === "loading") return <p>Loading...</p>;
  if (status === "failed") return <p>Error: {error}</p>;

  return (
    <>
      <SideBar />
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
                  <QuantityInput
                    quantity={item.quantity} // Pass current quantity as value
                    onIncrease={() =>
                      handleQuantityChange(item.name, item.quantity + 1)
                    }
                    onDecrease={() =>
                      handleQuantityChange(item.name, item.quantity - 1)
                    }
                    onChange={(e) =>
                      handleQuantityChange(
                        item.name,
                        parseInt(e.target.value, 10)
                      )
                    }
                  />
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
    </>
  );
};

export default Order;
