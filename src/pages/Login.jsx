import React from 'react';
import AuthForm from 'components/AuthForm/AuthForm';

const Login = () => {
  const isRegistration = false;
  return (
    <>
      <h1 className="title sub-title auth-title">Authorization</h1>
      <AuthForm isRegistration={isRegistration} />
    </>
  );
};

export default Login;
