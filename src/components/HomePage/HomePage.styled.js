import styled from '@emotion/styled';
import { colors } from 'variables/colors';

export const HomePageStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin: 0 auto;
  @media screen and (min-width: 768px) {
    width: 768px;
  }
  @media screen and (min-width: 1024px) {
    width: 900px;
  }

  .slogan {
    font-size: 18px;
    text-align: center;
    width: 90%;
    margin-bottom: 20px;
  }

  .info-list {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-bottom: 20px;
    @media screen and (min-width: 768px) {
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      gap: 30px;
      margin-bottom: 30px;
    }
    @media screen and (min-width: 1024px) {
      gap: 50px;
    }
  }

  .info-item {
    display: flex;
    flex-direction: column;
    gap: 15px;
    align-items: center;
  }

  .info-title {
    font-size: 18px;
    text-transform: uppercase;
  }

  .info-image {
    width: 290px;
    height: 150px;
    border-radius: 6px;
    overflow: hidden;
    box-shadow: 0px 0px 10px ${colors.mainShadow};
    @media screen and (min-width: 768px) {
      width: 310px;
      height: 160px;
    }
  }
`;
