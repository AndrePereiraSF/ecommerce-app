import styled from 'styled-components';

import ShopBackgroundImg from '../../../assets/images/bg-shop.jpg';

export const ContactBackgroundContainer = styled.div`
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
