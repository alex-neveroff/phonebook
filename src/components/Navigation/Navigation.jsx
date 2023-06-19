import { useSelector } from 'react-redux';
import { selectIsAuthorized } from '../../redux/auth/authSelectors';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  const isAuthorized = useSelector(selectIsAuthorized);
  return (
    <nav className="navigation">
      <NavLink className="navigationLink" to="/">
        Home
      </NavLink>
      {isAuthorized && (
        <NavLink className="navigationLink" to="/contacts">
          Contacts
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
