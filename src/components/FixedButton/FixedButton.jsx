import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import s from "./FixedButton.module.css";
import clsx from "clsx";

const FixedButton = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const previousPathRef = useRef("");
  const [buttonText, setButtonText] = useState("Order UkrFood");
  const [linkTo, setLinkTo] = useState("/ukrfood");

  useEffect(() => {
    const currentPath = location.pathname;

    // Текст кнопки не може збігатися з поточним маршрутом
    if (currentPath === "/ukrfood") {
      if (previousPathRef.current === "/tokyo") {
        setButtonText("Tokyo");
        setLinkTo("/tokyo");
      } else if (previousPathRef.current === "/napoli") {
        setButtonText("Napoli");
        setLinkTo("/napoli");
      } else {
        setButtonText("UkrFood");
        setLinkTo("/ukrfood");
      }
    } else {
      // Текст кнопки завжди відрізняється від поточного маршруту
      if (currentPath === "/tokyo") {
        setButtonText("UkrFood");
        setLinkTo("/ukrfood");
      } else if (currentPath === "/napoli") {
        setButtonText("UkrFood");
        setLinkTo("/ukrfood");
      } else {
        setButtonText("UkrFood");
        setLinkTo("/ukrfood");
      }
    }

    // Оновлення попереднього шляху
    previousPathRef.current = currentPath;
  }, [location]);

  const handleClick = () => {
    navigate(linkTo); // Використовуємо navigate для переходу до нового маршруту
  };

  const buttonClass = clsx(s.fixedButton, {
    [s.specialButton]: buttonText === "UkrFood",
  });
  return (
    <button className={buttonClass} onClick={handleClick}>
      {buttonText}
    </button>
  );
};

export default FixedButton;
