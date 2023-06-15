import styled from '@emotion/styled';

export const Spinner = styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
  display: inline-block;
  animation: spin 2s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
