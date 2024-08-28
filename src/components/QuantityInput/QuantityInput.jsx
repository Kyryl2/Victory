import s from "./QuantityInput.module.css"; // Створіть файл CSS для стилізації

// eslint-disable-next-line react/prop-types
const QuantityInput = ({ quantity, onIncrease, onDecrease, onChange }) => {
  return (
    <div className={s.quantityContainer}>
      <button
        className={s.quantityButton}
        onClick={onDecrease}
        disabled={quantity <= 1}
      >
        -
      </button>
      <input
        type="number"
        min="1"
        value={quantity}
        onChange={onChange}
        className={s.quantityInput}
      />
      <button className={s.quantityButton} onClick={onIncrease}>
        +
      </button>
    </div>
  );
};

export default QuantityInput;
