import styled from '@emotion/styled';
import { colors } from 'variables/colors';
import { transitions } from 'variables/transitions';

export const SearchForm = styled.label`
  display: flex;
  gap: 20px;
  font-size: 18px;
  font-weight: bold;
  margin: 0 auto;
  @media screen and (min-width: 768px) {
    width: 600px;
  }
  .input-wrap {
    position: relative;
    width: 100%;
  }
  .search-input {
    width: 100%;
    height: 30px;
    padding-left: 34px;
    margin-bottom: 20px;
    border: none;
    border-radius: 7px;
    color: ${colors.primary};
    background-color: ${colors.backgroundMain};
    box-shadow: 0px 0px 10px ${colors.mainShadow};
    transition: box-shadow ${transitions.transition};
    &:focus {
      box-shadow: 0px 0px 10px ${colors.focusShadow};
      outline: none;
    }
  }
  .contact-button {
    cursor: pointer;
    width: 30px;
    height: 30px;
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
    width: 100%;
    height: 100%;
    pointer-events: none;
    stroke: currentColor;
    fill: currentColor;
  }

  .icon-search {
    position: absolute;
    top: 4px;
    left: 4px;
    width: 20px;
    height: 20px;
    fill: currentColor;
    transition: fill ${transitions.transition};
  }
  .focused {
    fill: ${colors.iconActive};
  }
`;
