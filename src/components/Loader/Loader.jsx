import React from 'react';
import { Spinner } from './Loader.styled';
import { FaSpinner } from 'react-icons/fa';

const Loader = () => {
  return (
    <Spinner>
      <FaSpinner className="spinner-icon" />
    </Spinner>
  );
};

export default Loader;
