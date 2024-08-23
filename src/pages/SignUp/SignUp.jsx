import { useState } from "react";
import { useDispatch } from "react-redux";
import { userRegisterThunk } from "../../redux/auth/operations";
import s from "./SignUp.module.css";
const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Викликаємо thunk для реєстрації користувача
    const resultAction = await dispatch(
      userRegisterThunk({ name, email, password })
    );

    if (userRegisterThunk.fulfilled.match(resultAction)) {
      console.log("Registration successful:", resultAction.payload);
      // Додаткова логіка у разі успішної реєстрації
    } else {
      console.error("Registration failed:", resultAction.payload);
      // Додаткова логіка у разі помилки реєстрації
    }
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <div className={s.formGroup}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className={s.formGroup}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className={s.formGroup}>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button className={s.button} type="submit">
        Register
      </button>
    </form>
  );
};

export default SignUp;
