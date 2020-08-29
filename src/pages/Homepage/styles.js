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
  height: 50%;
  width: 60%;
  text-align: center;
  font-size: 28px;

  @media (max-width: 800px) {
    height: 35%;
    width: 85%;
  }

  #title {
    font-size: 28px;
    font-weight: bold;
  }

  #subtitle {
    font-weight: normal;
    font-size: 24px;
  }
`;

export const Divider = styled.hr`
  width: 80%;
  margin: 1rem 0;
`;

export const ShopContainer = styled.div`
  padding: 5% 0;
  background: #000;

  h2 {
    color: #fff;
    text-align: center;
    margin: 5% 0;
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
`;

export const ProductImage = styled.img`
  height: 50%;
  width: 50%;
  border-radius: 25%;
`;

export const AboutContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: #faa014;
  padding: 5% 10%;

  p {
    margin-top: 5%;
    text-align: center;
    font-size: 18px;
  }
`;

export const BenefitsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  margin-top: 10%;
`;

export const BenefitsFlexRow = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 5% 0;

  #organic {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 40%;
  }

  #cotton {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 40%;
  }

  #water-proof {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 40%;
  }

  #washable {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 40%;
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
  justify-content: center;
  align-items: center;
`;

export const ContactContainer = styled.div`
  height: 25vh;
  background: #000;
  color: #fff;
  text-align: center;
  font-size: 18px;
  padding: 8% 10%;
  margin-top: 35%;

  p {
    margin: 4% 0;
    font-size: 16px;
  }
`;

export const FooterContainer = styled.div`
  height: 90%;
  background: #000;
  color: #fff;
  text-align: center;
  font-size: 18px;
  padding: 8% 10%;

  p {
    margin: 4% 0;
    font-size: 16px;
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
`;

export const SocialMedia = styled.div`
  display: flex;
  margin: 10% 0;
  justify-content: space-around;
`;

export const StoreInfo = styled.div`
  font-size: 14px;
`;
