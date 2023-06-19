import { NavLink } from 'react-router-dom';
import { StyledAuthNav } from './AuthNav.styled';

const AuthNav = () => {
  return (
    <StyledAuthNav>
      <NavLink className="menuButton" to="/registration">
        Sign Up
      </NavLink>
      <NavLink className="menuButton" to="/login">
        Log In
      </NavLink>
    </StyledAuthNav>
  );
};

export default AuthNav;
