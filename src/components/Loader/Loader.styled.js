import styled from '@emotion/styled';
import { colors } from 'variables/colors';

export const Spinner = styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
  display: inline-block;
  animation: spin 3s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  .spinner-icon {
    color: ${colors.headerBcg};
    width: 100px;
    height: 100px;
  }
`;
