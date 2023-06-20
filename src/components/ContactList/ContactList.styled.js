import styled from '@emotion/styled';

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
`;
