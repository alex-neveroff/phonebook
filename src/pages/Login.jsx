import AuthForm from 'components/AuthForm/AuthForm';
import React from 'react';

const Login = () => {
  const isRegistration = false;
  return (
    <div>
      <title>Login</title>
      <AuthForm isRegistration={isRegistration} />
    </div>
  );
};

export default Login;
