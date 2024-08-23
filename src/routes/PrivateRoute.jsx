import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../redux/auth/selectors";

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ component: Component }) => {
  const location = useLocation();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return isLoggedIn ? (
    Component
  ) : (
    <Navigate to="/signin" replace state={location} />
  );
};

export default PrivateRoute;
