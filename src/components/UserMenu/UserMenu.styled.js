import styled from '@emotion/styled';
import { colors } from 'variables/colors';
import { transitions } from 'variables/transitions';

export const StyledUserMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  gap: 7px;

  .userName {
    font-size: 12px;
    font-weight: bold;
    color: ${colors.darkShadow};
    @media screen and (min-width: 768px) {
      font-size: 16px;
    }
  }
  .menuButton {
    height: 25px;
    width: 70px;
    border: 1px solid ${colors.mainShadow};
    border-radius: 5px;
    box-shadow: 5px 5px 5px ${colors.mainShadow};
    font-size: 12px;
    font-weight: bold;
    background-color: transparent;
    color: ${colors.darkShadow};
    cursor: pointer;
    transition: box-shadow ${transitions.transition},
      transform ${transitions.transition};
    &:hover {
      box-shadow: 5px 5px 5px ${colors.focusShadow};
    }
    &:active {
      transform: scale(0.95);
      box-shadow: 1px 2px 2px ${colors.focusShadow};
    }
    @media screen and (min-width: 768px) {
      font-size: 14px;
      height: 30px;
      width: 80px;
    }
  }
`;
