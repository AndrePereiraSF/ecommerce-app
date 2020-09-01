import styled from 'styled-components';

export const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 10%;

  @media (min-width: 1100px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const OrderContainer = styled.div`
  width: 100%;
`;

export const CartItems = styled.div`
  display: flex;
  width: 75%;
  margin: 0 auto;
  color: #fff;
`;

export const ProductDetailsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
`;

export const ProductValuesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-left: 10px;
`;

export const SubMenu = styled.div`
  color: #fff;
  display: flex;
  justify-content: space-between;
  width: 75%;
  margin: 0 auto;
`;
