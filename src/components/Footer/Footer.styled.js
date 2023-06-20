import styled from '@emotion/styled';
import { colors } from 'variables/colors';
import { transitions } from 'variables/transitions';

export const FooterStyled = styled.div`
  padding-left: 10px;
  padding-right: 10px;
  padding: 10px 20px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: ${colors.headerBcg};
  border-radius: 5px;
  @media screen and (min-width: 768px) {
    padding-left: 20px;
    padding-right: 20px;
  }
  .copyright {
    display: flex;
    align-items: center;
    gap: 5px;
    font-weight: 500;
    color: ${colors.primary};
  }
  .socialNet {
    display: flex;
    align-items: center;
    gap: 15px;
  }
  .footer-link {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    width: 24px;
    height: 24px;
    border: none;
    padding: 0;

    background-color: transparent;

    color: ${colors.primary};
    transition: all ${transitions.transition};

    &:hover,
    &:focus {
      box-shadow: 0px 0px 15px ${colors.focusShadow};
      outline: none;
      color: ${colors.iconHover};
    }
    &:active {
      color: ${colors.iconActive};
    }
  }
`;
