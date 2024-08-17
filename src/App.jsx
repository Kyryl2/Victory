import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Order from "./pages/Order/Order";
import PrivateRoute from "./routes/PrivateRoute";
import RestrictedRoute from "./routes/RestrictedRoute";
import SignUp from "./pages/SignUp/SignUp";
import SignIn from "./pages/SignIn/SignIn";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" index element={<Home />} />

        <Route path="/order" element={<PrivateRoute component={<Order />} />} />
        <Route
          path="/register"
          element={<RestrictedRoute component={<SignUp />} />}
        />

        <Route
          path="/login"
          element={<RestrictedRoute component={<SignIn />} />}
        />
      </Routes>
    </>
  );
};

export default App;
