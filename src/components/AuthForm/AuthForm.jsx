import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registration, login } from 'redux/auth/authOperations';

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
    <form
      onSubmit={isRegistration ? registrationSubmit : loginSubmit}
      autoComplete="off"
    >
      {isRegistration && (
        <label htmlFor="name">
          Name:
          <input
            id="name"
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            placeholder="Your name"
            required
          />
        </label>
      )}

      <label htmlFor="email">
        Email:
        <input
          id="email"
          type="text"
          name="email"
          value={email}
          onChange={handleChange}
          placeholder="Your e-mail"
          required
        />
      </label>
      <label htmlFor="password">
        Password
        <input
          id="password"
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          placeholder="Your password"
          required
        />
      </label>
      {isRegistration ? (
        <button type="submit">Sign Up</button>
      ) : (
        <button type="submit">Log In</button>
      )}
    </form>
  );
};

export default AuthForm;
