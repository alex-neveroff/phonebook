import styled from '@emotion/styled';
import { colors } from 'variables/colors';
import { transitions } from 'variables/transitions';

export const SearchForm = styled.label`
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 18px;
  font-weight: bold;

  .search-input {
    height: 30px;
    padding-left: 10px;
    margin-bottom: 20px;
    border: none;
    border-radius: 7px;
    box-shadow: 0px 0px 10px ${colors.mainShadow};
    transition: box-shadow ${transitions.transition};
    &:focus {
      box-shadow: 0px 0px 10px ${colors.darkShadow};
      outline: none;
    }
  }
`;
