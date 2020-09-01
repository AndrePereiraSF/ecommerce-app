import styled from 'styled-components';

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

