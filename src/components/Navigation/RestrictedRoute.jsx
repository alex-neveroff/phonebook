import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
import { selectIsAuthorized } from 'redux/auth/authSelectors';

export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const isAuthorized = useSelector(selectIsAuthorized);

  return isAuthorized ? <Navigate to={redirectTo} /> : <Component />;
};

RestrictedRoute.propTypes = {
  component: PropTypes.object.isRequired,
  redirectTo: PropTypes.string.isRequired,
};
