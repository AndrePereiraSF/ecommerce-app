import styled from 'styled-components';

import ClothesBackgroundImg from '../../../assets/images/bg-clothes.jpg';

export const TitleBackgroundContainer = styled.div`
  height: 70vh;
  background-image: url(${ClothesBackgroundImg});
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 1100px) {
    height: 80vh;
  }
`;

export const TitleContainer = styled.div`
  outline: 1px solid #fff;
  outline-offset: -6px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #000;
  color: #fff;
  height: 35%;
  width: 85%;
  text-align: center;

  #title {
    font-size: 28px;
    font-weight: bold;
  }

  #subtitle {
    font-weight: normal;
    font-size: 24px;
  }

  @media (min-width: 1100px) {
    height: 40%;
    width: 40%;

    #title {
      font-size: 44px;
      font-weight: bold;
    }

    #subtitle {
      font-weight: normal;
      font-size: 36px;
    }
  }
`;

