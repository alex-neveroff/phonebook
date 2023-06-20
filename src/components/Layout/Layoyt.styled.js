import styled from '@emotion/styled';
import { colors } from 'variables/colors';
import { transitions } from 'variables/transitions';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-left: 10px;
  padding-right: 10px;
  margin: 0 auto;
  height: 100vh;
  @media screen and (min-width: 320px) {
    width: 320px;
  }
  @media screen and (min-width: 768px) {
    width: 768px;
    padding-left: 20px;
    padding-right: 20px;
  }
  @media screen and (min-width: 1024px) {
    width: 1024px;
  }
  .header {
    padding-left: 10px;
    padding-right: 10px;
    padding: 10px 20px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${colors.headerBcg};
    margin-bottom: 15px;
    border-radius: 5px;
    @media screen and (min-width: 768px) {
      padding-left: 20px;
      padding-right: 20px;
    }
  }
  .navigation {
    display: flex;
    align-items: center;
    gap: 15px;

    @media screen and (min-width: 768px) {
      gap: 40px;
    }
  }
  .navigationLink {
    font-weight: bold;
    font-size: 16px;
    color: ${colors.primary};
    cursor: pointer;
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

    &:hover {
      scale: 1.1;
    }

    &.active {
      text-decoration: underline;
    }
    @media screen and (min-width: 768px) {
      font-size: 26px;
    }
  }
  .title {
    font-weight: bold;
    color: ${colors.primary};
    text-align: center;
    margin-bottom: 15px;
    text-transform: uppercase;
  }

  .main-content {
    flex-grow: 1;
  }
  .main-title {
    font-size: 20px;
    @media screen and (min-width: 768px) {
      font-size: 26px;
    }
  }

  .sub-title {
    font-size: 18px;
    @media screen and (min-width: 768px) {
      font-size: 22px;
    }
  }
  .menuButton {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 25px;
    width: 70px;
    border: 1px solid ${colors.primary};
    border-radius: 5px;
    font-size: 12px;
    font-weight: bold;
    color: ${colors.primary};
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
