import styled from '@emotion/styled';
import { colors } from 'variables/colors';

export const StyledUserMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  gap: 7px;

  .userName {
    font-size: 12px;
    font-weight: bold;
    color: ${colors.primary};
    @media screen and (min-width: 768px) {
      font-size: 16px;
    }
  }
  .menuButton {
    background-color: transparent;
  }
`;
