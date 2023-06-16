import AuthForm from 'components/AuthForm/AuthForm';
import React from 'react';

const Registration = () => {
  const isRegistration = true;
  return (
    <div>
      <title>Registration</title>
      <AuthForm isRegistration={isRegistration} />
    </div>
  );
};

export default Registration;
