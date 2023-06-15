// import { useSelector } from 'react-redux';
// import { AuthNav } from '../AuthNav/AuthNav';
// import { UserMenu } from 'components/UserMenu/UserMenu';
// import { selectIsAuthorized } from '../../redux/auth/authSelectors';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <header>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/contacts">Contacts</NavLink>
      </nav>
      {/* {isAuthorized ? <UserMenu /> : <AuthNav />} */}
    </header>
  );
};

export default Navigation;