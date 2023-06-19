import AuthForm from 'components/AuthForm/AuthForm';
import React from 'react';

const Login = () => {
  const isRegistration = false;
  return (
    <>
      <h1 className="title sub-title">Authorization</h1>
      <AuthForm isRegistration={isRegistration} />
    </>
  );
};

export default Login;
