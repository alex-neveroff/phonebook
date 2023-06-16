import { NavLink } from 'react-router-dom';

const AuthNav = () => {
  return (
    <div>
      <NavLink className="" to="/registration">
        Sign Up
      </NavLink>
      <NavLink className="" to="/login">
        Log In
      </NavLink>
    </div>
  );
};

export default AuthNav;
