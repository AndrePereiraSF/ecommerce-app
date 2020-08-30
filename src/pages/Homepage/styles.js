import styled from 'styled-components';

import ClothesBackgroundImg from '../../assets/images/bg-clothes.jpg';
import ShopBackgroundImg from '../../assets/images/bg-shop.jpg';

export const Header = styled.div`
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
  font-size: 1.4rem;
  color: #fff;
`;

export const CartContainer = styled.div`
  display: flex;
  align-items: center;
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

export const ShopContainer = styled.div`
  padding: 5% 0;

  @media (min-width: 1100px) {
    padding: 0;
  }
`;

export const ProductList = styled.div`
  padding: 5% 0;

  @media (min-width: 1100px) {
    padding: 0;
    display: flex;
    flex-wrap: wrap;

    img:hover {
      border-radius: 25%;
      transform: scale(1.5);
    }
  }
`;

export const ProductContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #fff;
  margin-bottom: 10%;

  #product-name {
    margin-top: 5%;
    font-size: 22px;
    font-weight: bold;
  }

  #product-price {
    font-size: 18px;
  }

  @media (min-width: 1100px) {
    margin-bottom: 2%;
    flex-grow: 1;
    flex-basis: 30%;

    #product-name {
      margin-top: 30px;
      font-size: 28px;
      font-weight: bold;
    }

    #product-price {
      font-size: 20px;
    }
  }
`;

export const ProductImage = styled.img`
  height: 50%;
  width: 50%;
  border-radius: 25%;
  transition: border-radius 0.2s, transform 0.25s;

  @media (min-width: 1100px) {
    height: 250px;
    width: 250px;
    border-radius: 50%;
  }
`;

export const AboutContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: #faa014;

  p {
    margin: 8% 0;
    width: 80%;
    text-align: center;
    font-size: 18px;
  }

  @media (min-width: 1100px) {
    p {
      width: 50%;
      margin: 0 0 4%;
    }
  }
`;

export const BenefitsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const BenefitItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
  flex-basis: 50%;
  margin-bottom: 25px;

  @media (min-width: 1100px) {
    width: 120px;
    flex-basis: 10%;
    margin: 0 45px 75px;
  }
`;

export const FooterBackgroundContainer = styled.div`
  height: 80vh;
  background-image: url(${ShopBackgroundImg});
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  display: flex;
  flex-direction: column;
`;

export const ContactContainer = styled.div`
  background: #000;
  color: #fff;
  text-align: center;
  font-size: 18px;
  padding: 1% 10%;
  margin-top: 65%;

  p {
    margin: 4% 0;
    font-size: 16px;
  }

  @media (min-width: 1100px) {
    margin-top: 25%;
    padding: 0 0 2%;

    p {
      margin: 0;
      font-size: 16px;
    }
  }
`;

export const FooterContainer = styled.div`
  color: #fff;
  text-align: center;
  font-size: 18px;
  padding: 8% 10%;

  p {
    margin: 4% 0;
  }

  @media (min-width: 1100px) {
    padding: 2%;
  }
`;

export const ButtonToTheTop = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #000;
  color: #fff;
  border: none;
  margin: 0 auto;

  @media (min-width: 1100px) {
    font-size: 16px;
  }
`;

export const SocialMedia = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 10% 0;

  @media (min-width: 1100px) {
    margin: 5% 0;
    justify-content: center;

    .social-icon {
      margin: 0 1%;
    }
  }
`;

export const StoreInfo = styled.div`
  font-size: 14px;

  @media (min-width: 1100px) {
    font-size: 16px;
    width: 30%;
    margin: 0 auto;
  }
`;

export const Title = styled.h2`
  color: ${({ color }) => color ? color : '#FFF'};
  text-align: center;
  margin: 5% 0;

  @media (min-width: 1100px) {
    font-size: 36px;
    margin: 2% 0;
  }
`;
