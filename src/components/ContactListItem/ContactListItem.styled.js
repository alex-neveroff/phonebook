import styled from '@emotion/styled';
import { transitions } from 'variables/transitions';
import { colors } from 'variables/colors';

export const ContactData = styled.li`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  grid-template-rows: 1fr;
  font-size: 18px;

  .contact-number {
    justify-self: center;
  }
  .delete-button {
    cursor: pointer;
    width: 24px;
    height: 24px;
    border: none;
    padding: 0;

    background-color: transparent;
    justify-self: end;
    color: red;
    transition: color ${transitions.transition},
      box-shadow ${transitions.transition};

    &:hover,
    &:focus {
      box-shadow: 0px 0px 15px ${colors.focusShadow};
      outline: none;
    }
    &:active {
      color: ${colors.mainShadow};
    }
  }
  .cross {
    display: block;
    width: 100%;
    height: 100%;
    pointer-events: none;
    stroke: currentColor;
  }
`;
