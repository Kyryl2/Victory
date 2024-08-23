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
const App = () => {
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
              <Pizza />
            </Home>
          }
        />

        <Route path="/order" element={<PrivateRoute component={<Order />} />} />
        <Route
          path="/signup"
          element={<RestrictedRoute component={<SignUp />} />}
        />

        <Route
          path="/signin"
          element={<RestrictedRoute component={<SignIn />} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
