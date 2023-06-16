import { useSelector } from 'react-redux';
import { selectIsAuthorized } from '../../redux/auth/authSelectors';
import { NavLink } from 'react-router-dom';
import AuthNav from 'components/AuthNav/AuthNav';
import UserMenu from 'components/UserMenu/UserMenu';

const Navigation = () => {
  const isAuthorized = useSelector(selectIsAuthorized);
  return (
    <>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/contacts">Contacts</NavLink>
      </nav>
      {isAuthorized ? <UserMenu /> : <AuthNav />}
    </>
  );
};

export default Navigation;
