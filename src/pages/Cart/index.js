import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Title from '../../components/Title';
import Divider from '../../components/Divider';
import Button from '../../components/Button';
import QuantityPicker from '../../components/QuantityPicker';

import {
  ProductDetailsContainer,
  ProductValuesContainer,
  CartContainer,
  CartItems,
  SubMenu,
  OrderContainer
} from './style';

const cartProducts = [
  {
    name: 'Shirt',
    image: 'https://i.imgur.com/eTnEEiI.png',
    price: 60,
    quantity: 2,
  },
  {
    name: 'Jacket',
    image: 'https://i.imgur.com/AN9JzuV.png',
    price: 120,
    quantity: 1,
  },
  {
    name: 'Shirt',
    image: 'https://i.imgur.com/eTnEEiI.png',
    price: 60,
    quantity: 2,
  },
  {
    name: 'Jacket',
    image: 'https://i.imgur.com/AN9JzuV.png',
    price: 120,
    quantity: 1,
  },
  {
    name: 'Shirt',
    image: 'https://i.imgur.com/eTnEEiI.png',
    price: 60,
    quantity: 2,
  },
  {
    name: 'Jacket',
    image: 'https://i.imgur.com/AN9JzuV.png',
    price: 120,
    quantity: 1,
  },
];

export default function Cart() {
  const handleCheckout = () => {
    alert('Success');
  };

  return (
    <CartContainer>
      <OrderContainer>
        <Title>Meu Carrinho</Title>
        {cartProducts.map((product, index) => {
          return (
            <div key={index}>
              <Divider />
              <CartItems>
                <img height="120px" width="120px" src={product.image} />
                <ProductDetailsContainer>
                  <ProductValuesContainer>
                    <span>{product.name}</span>
                    <FontAwesomeIcon
                      icon="times"
                      size="lg"
                      style={{ marginLeft: 'auto' }}
                    />
                  </ProductValuesContainer>
                  <ProductValuesContainer>
                    <span>Unid.:</span>
                    <span>R${product.price}</span>
                  </ProductValuesContainer>
                  <ProductValuesContainer>
                    <span>Quant.:</span>
                    <QuantityPicker initialValue={product.quantity} />
                  </ProductValuesContainer>
                  <ProductValuesContainer>
                    <span>Total:</span>
                    <span>R${product.price * product.quantity}</span>
                  </ProductValuesContainer>
                </ProductDetailsContainer>
              </CartItems>
            </div>
          );
        })}
      </OrderContainer>

      <OrderContainer>
        <Title>Resumo do pedido</Title>
        <Divider />
        <SubMenu>
          <FontAwesomeIcon icon="tag" size="sm" />
          <span>Insira o código promocional</span>
        </SubMenu>
        <Divider />
        <SubMenu>
          <FontAwesomeIcon icon="scroll" size="sm" />
          <span>Adicione uma nota</span>
        </SubMenu>

        <Divider />
        <SubMenu>
          <span>Subtotal</span>
          <span>R$65,00</span>
        </SubMenu>

        <SubMenu>
          <span>Envio</span>
          <span>Grátis</span>
        </SubMenu>

        <SubMenu>
          <span>São Paulo, Brasil</span>
        </SubMenu>

        <Divider />
        <SubMenu>
          <span>Total</span>
          <span>R$65,00</span>
        </SubMenu>
        <Button style={{ width: '150px' }} onClick={handleCheckout}>Checkout</Button>
      </OrderContainer>
    </CartContainer>
  );
}
