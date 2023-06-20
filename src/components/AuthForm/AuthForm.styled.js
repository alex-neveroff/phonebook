import styled from '@emotion/styled';
import { transitions } from 'variables/transitions';
import { colors } from 'variables/colors';

export const StyledAuthForm = styled.form`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  gap: 15px;

  @media screen and (min-width: 768px) {
    width: 450px;
    gap: 30px;
  }

  .form-label {
    display: flex;
    flex-direction: column;
    gap: 10px;
    font-size: 14px;
    font-weight: bold;
    color: ${colors.primary};
    @media screen and (min-width: 768px) {
      font-size: 18px;
    }
  }

  .form-input {
    height: 30px;
    padding-left: 10px;
    border: none;
    border-radius: 7px;
    box-shadow: 0px 0px 10px ${colors.mainShadow};
    background-color: ${colors.backgroundMain};
    color: ${colors.primary};
    transition: box-shadow ${transitions.transition};
    &:focus {
      box-shadow: 0px 0px 10px ${colors.darkShadow};
      outline: none;
    }
  }
  .form-submit {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 30px;
    border: none;
    border-radius: 7px;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    margin-top: 15px;
    background-color: ${colors.headerBcg};
    color: ${colors.primary};
    box-shadow: 5px 5px 5px ${colors.mainShadow};
    transition: box-shadow ${transitions.transition},
      background-color ${transitions.transition},
      transform ${transitions.transition};
    &:hover {
      background-color: ${colors.mainShadow};
      box-shadow: 5px 5px 5px ${colors.focusShadow};
    }
    &:active {
      transform: scale(0.95);
      box-shadow: 1px 2px 2px ${colors.focusShadow};
    }
  }
`;
