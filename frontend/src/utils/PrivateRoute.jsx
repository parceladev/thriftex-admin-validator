import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
import { getToken, saveToken } from './token-utilities';

const PrivateRoute = ({ element }) => {
  const token = getToken();
  const isUserLoggedIn = !!token && !saveToken();

  return isUserLoggedIn ? element : <Navigate to="/auth/sign-in" replace />;
};

PrivateRoute.propTypes = {
  element: PropTypes.node.isRequired,
};

export default PrivateRoute;
