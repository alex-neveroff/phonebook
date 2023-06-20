import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
import {
  selectIsAuthorized,
  selectIsRefreshing,
} from 'redux/auth/authSelectors';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const isAuthorized = useSelector(selectIsAuthorized);
  const isRefreshing = useSelector(selectIsRefreshing);

  return !isAuthorized & !isRefreshing ? (
    <Navigate to={redirectTo} />
  ) : (
    <Component />
  );
};

PrivateRoute.propTypes = {
  component: PropTypes.object.isRequired,
  redirectTo: PropTypes.string.isRequired,
};
