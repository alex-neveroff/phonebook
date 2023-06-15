import styled from '@emotion/styled';
import { colors } from 'variables/colors';

export const Container = styled.div`
  margin: 30px auto;
  padding: 30px;
  width: 480px;
  min-height: 100vh;
  box-shadow: 0px 0px 10px ${colors.mainShadow};

  .title {
    font-weight: bold;
    color: ${colors.primary};
    text-align: center;
    margin-bottom: 30px;
    text-transform: uppercase;
  }

  .main-title {
    font-size: 26px;
  }

  .sub-title {
    font-size: 22px;
  }
`;
