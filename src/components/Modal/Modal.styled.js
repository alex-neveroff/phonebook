import styled from '@emotion/styled';
import { colors } from 'variables/colors';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: ${colors.mainShadow}; */
  z-index: 150;
`;

export const ModalWindow = styled.div`
  padding: 20px;
  border-radius: 10px;
  background-color: #fff;
  overflow: hidden;
  box-shadow: 0px 0px 10px ${colors.mainShadow};
  @media screen and (min-width: 768px) {
    width: 450px;
  }

  .modal-content {
    max-width: calc(100vw - 48px);
    max-height: calc(100vh - 24px);
  }
`;
