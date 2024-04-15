// ProtectedRoute.jsx
import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";
import { saveToken } from "./tokenUtilities";
import { getToken } from "./tokenUtilities";

export const ProtectedRoute = ({ element }) => {
  const token = getToken();
  const isUserLoggedIn = !!token && !saveToken();

  return isUserLoggedIn ? element : <Navigate to="/auth/sign-in" replace />;
};

ProtectedRoute.propTypes = {
  element: PropTypes.node.isRequired,
};

export default ProtectedRoute;
