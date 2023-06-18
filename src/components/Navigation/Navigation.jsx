import { useSelector } from 'react-redux';
import { selectIsAuthorized } from '../../redux/auth/authSelectors';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  const isAuthorized = useSelector(selectIsAuthorized);
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      {isAuthorized && <NavLink to="/contacts">Contacts</NavLink>}
    </nav>
  );
};

export default Navigation;
