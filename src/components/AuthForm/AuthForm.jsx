import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { registration, login } from 'redux/auth/authOperations';
import { StyledAuthForm } from './AuthForm.styled';

const AuthForm = ({ isRegistration }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = event => {
    const { name, value } = event.currentTarget;
    if (name === 'name') {
      setName(value);
    } else if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const registrationSubmit = event => {
    event.preventDefault();
    dispatch(registration({ name, email, password }));
    resetState();
  };

  const loginSubmit = event => {
    event.preventDefault();
    dispatch(login({ email, password }));
    resetState();
  };

  const resetState = () => {
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <StyledAuthForm
      onSubmit={isRegistration ? registrationSubmit : loginSubmit}
      autoComplete="off"
    >
      {isRegistration && (
        <label className="form-label" htmlFor="name">
          Name:
          <input
            className="form-input"
            id="name"
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            placeholder="Your name"
            autocomplete="off"
            required
          />
        </label>
      )}

      <label className="form-label" htmlFor="email">
        Email:
        <input
          className="form-input"
          id="email"
          type="text"
          name="email"
          value={email}
          onChange={handleChange}
          placeholder="Your e-mail"
          autocomplete="off"
          required
        />
      </label>
      <label className="form-label" htmlFor="password">
        Password
        <input
          className="form-input"
          id="password"
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          placeholder="Your password"
          autocomplete="off"
          required
        />
      </label>
      {isRegistration ? (
        <button className="form-submit" type="submit">
          Sign Up
        </button>
      ) : (
        <button className="form-submit" type="submit">
          Log In
        </button>
      )}
    </StyledAuthForm>
  );
};

AuthForm.propTypes = {
  isRegistration: PropTypes.bool.isRequired,
};

export default AuthForm;
