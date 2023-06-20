import React from 'react';
import AuthForm from 'components/AuthForm/AuthForm';

const Registration = () => {
  const isRegistration = true;
  return (
    <>
      <h1 className="title sub-title">Registration</h1>
      <AuthForm isRegistration={isRegistration} />
    </>
  );
};

export default Registration;
