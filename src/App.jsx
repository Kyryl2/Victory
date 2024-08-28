import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Order from "./pages/Order/Order";
import PrivateRoute from "./routes/PrivateRoute";
import RestrictedRoute from "./routes/RestrictedRoute";
import SignUp from "./pages/SignUp/SignUp";
import SignIn from "./pages/SignIn/SignIn";
import NotFound from "./pages/NotFound/NotFound";
import Hello from "./pages/Hello/Hello";
import Info from "./components/Info/Info";
import SideBar from "./components/SideBar/SideBar";
import Sushi from "./components/Sushi/Sushi";
import Pizza from "./components/Pizza/Pizza";
import s from "../src/App.module.css";
import UkrFood from "./components/UkrFood/UkrFood";
import FixedButton from "./components/FixedButton/FixedButton";
import { useDispatch, useSelector } from "react-redux";
import { selectIsRefreshing } from "./redux/auth/selectors";
import { useEffect } from "react";
import { userRefreshThunk } from "./redux/auth/operations";
import Contact from "./pages/Contact/Contact";
import About from "./pages/About/About";
const App = () => {
  // const isRefreshing = useSelector(selectIsRefreshing);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userRefreshThunk());
  }, [dispatch]);
  return (
    <>
      <Routes>
        <Route path="/" index element={<Hello />} />

        <Route
          path="/tokyo"
          element={
            <Home>
              <div className={s.wrapper}>
                <SideBar />
                <Info />
              </div>
              <FixedButton />
              <Sushi />
            </Home>
          }
        />

        <Route
          path="/napoli"
          element={
            <Home>
              <div className={s.wrapper}>
                <SideBar />
                <Info />
              </div>
              <FixedButton />
              <Pizza />
            </Home>
          }
        />
        <Route
          path="/ukrfood"
          element={
            <Home>
              <div className={s.wrapper}>
                <SideBar />
                <Info />
              </div>
              <FixedButton />
              <UkrFood />
            </Home>
          }
        />

        <Route path="/order" element={<PrivateRoute component={<Order />} />} />
        <Route
          path="/contact"
          element={<PrivateRoute component={<Contact />} />}
        />
        <Route
          path="/signup"
          element={<RestrictedRoute component={<SignUp />} />}
        />

        <Route
          path="/signin"
          element={<RestrictedRoute component={<SignIn />} />}
        />
        <Route path="*" element={<NotFound />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
};

export default App;
