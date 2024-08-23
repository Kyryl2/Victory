// FixedButton.js
import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import s from "./FixedButton.module.css";

const FixedButton = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const previousPathRef = useRef("");
  const [buttonText, setButtonText] = useState("Order UkrFood");
  const [linkTo, setLinkTo] = useState("/ukrfood");

  useEffect(() => {
    const currentPath = location.pathname;

    if (currentPath === "/ukrfood") {
      setButtonText(previousPathRef.current === "/tokyo" ? "Tokyo" : "Napoli");
      setLinkTo(previousPathRef.current);
    } else {
      setButtonText("Order UkrFood");
      setLinkTo("/ukrfood");
    }

    previousPathRef.current = currentPath;
  }, [location]);

  const handleClick = () => {
    navigate(linkTo); // Використовуємо navigate для переходу до нового маршруту
  };

  return (
    <button className={s.fixedButton} onClick={handleClick}>
      {buttonText}
    </button>
  );
};

export default FixedButton;
