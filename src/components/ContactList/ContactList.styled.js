import styled from '@emotion/styled';
import { colors } from 'variables/colors';

export const ContactListStyled = styled.div`
  overflow-y: auto;
  max-height: calc(100% - (80px + 50px));

  .contact-list {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: 0 auto;
    @media screen and (min-width: 768px) {
      width: 600px;
    }
  }
  &::-webkit-scrollbar {
    width: 0px;
  }

  @media screen and (min-width: 768px) {
    &::-webkit-scrollbar {
      width: 8px;
    }
    &::-webkit-scrollbar-track {
      background: ${colors.headerBcg};
    }
    &::-webkit-scrollbar-thumb {
      background: ${colors.headerBcg};
    }
  }
`;
