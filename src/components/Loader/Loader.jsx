import React from 'react';
import { Spinner } from './Loader.styled';
import { ReactComponent as SpinnerIcon } from 'icons/spinner.svg';

const Loader = () => {
  return (
    <Spinner>
      <SpinnerIcon width="100" height="100" />
    </Spinner>
  );
};

export default Loader;
