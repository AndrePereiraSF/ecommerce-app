import styled from 'styled-components';

import ClothesBackgroundImg from '../../assets/images/bg-clothes.jpg';

export const MobileHeader = styled.div`
  background: #faa014;
  height: 12vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5%;

  @media (min-width: 1100px) {
    height: 10vh;
  }
`;

export const WebHeader = styled.div`
  background: #faa014;
  height: 90px;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 0 5%;

  button:focus {
    outline: none;
  }
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  font-size: 28px;
  margin: 0 auto;
  width: 50%;
`;

export const CartCounter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #000;
  border-radius: 50%;
  height: 1.8rem;
  width: 2.5rem;
  margin-left: 10%;
  text-align: center;
  font-size: 18px;
  color: #fff;
`;

export const CartContainer = styled.div`
  display: flex;
  align-items: center;
  background: none;
  border: none;
`;

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

export const Divider = styled.hr`
  width: 80%;
  margin: 1rem 0;
`;
