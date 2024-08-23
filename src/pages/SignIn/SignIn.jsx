import { useState } from "react";
import { useDispatch } from "react-redux";

import s from "./SignIn.module.css";
import { userLoginThunk } from "../../redux/auth/operations";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const resultAction = await dispatch(userLoginThunk({ email, password }));

    if (userLoginThunk.fulfilled.match(resultAction)) {
      console.log("Login successful:", resultAction.payload);
    } else {
      console.error("Login failed:", resultAction.payload);
    }
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
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
      <button type="submit" className={s.button}>
        Login
      </button>
    </form>
  );
};

export default SignIn;
