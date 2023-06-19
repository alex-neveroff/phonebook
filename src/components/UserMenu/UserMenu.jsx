import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserName } from 'redux/auth/authSelectors';
import { logout } from 'redux/auth/authOperations';
import { StyledUserMenu } from './UserMenu.styled';

const UserMenu = () => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  return (
    <StyledUserMenu>
      <p className="userName">{userName}</p>
      <button
        className="menuButton"
        type="button"
        onClick={() => dispatch(logout())}
      >
        Log out
      </button>
    </StyledUserMenu>
  );
};

export default UserMenu;
