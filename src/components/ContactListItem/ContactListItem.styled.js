import styled from '@emotion/styled';
import { transitions } from 'variables/transitions';
import { colors } from 'variables/colors';

export const ContactData = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 18px;

  .contact-align {
    display: flex;
    flex-direction: column;
    width: 85%;
    gap: 5px;
    @media screen and (min-width: 768px) {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
  }

  .contact-number {
    font-weight: 500;
  }
  .button-wrap {
    display: flex;
    gap: 4px;
  }
  .contact-button {
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
    transition: color ${transitions.transition},
      box-shadow ${transitions.transition};

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
  .icon {
    display: block;
    width: 70%;
    height: 70%;
    pointer-events: none;
    stroke: currentColor;
    fill: currentColor;
  }
`;
