import React from 'react';

import Title from '../Title';
import {
  ShopContainer,
  ProductList,
  ProductContainer,
  ProductImage,
  ShopButton,
} from './styles';

const products = [
  {
    name: 'Shirt',
    image: 'https://i.imgur.com/eTnEEiI.png',
    price: 'R$60,00',
  },
  {
    name: 'Jacket',
    image: 'https://i.imgur.com/AN9JzuV.png',
    price: 'R$120,00',
  },
  {
    name: 'Shoes',
    image: 'https://i.imgur.com/xKqVAhA.png',
    price: 'R$180,00',
  },
  {
    name: 'Jeans',
    image: 'https://i.imgur.com/jii68d0.png',
    price: '$90,00',
  },
  {
    name: 'Shoes',
    image: 'https://i.imgur.com/xKqVAhA.png',
    price: 'R$180,00',
  },
  {
    name: 'Jeans',
    image: 'https://i.imgur.com/jii68d0.png',
    price: '$90,00',
  },
  {
    name: 'Shoes',
    image: 'https://i.imgur.com/xKqVAhA.png',
    price: 'R$180,00',
  },
  {
    name: 'Jeans',
    image: 'https://i.imgur.com/jii68d0.png',
    price: '$90,00',
  },
];

export default function StoreSection() {
  return (
    <ShopContainer id="shop">
      <Title>COMPRAR</Title>
      <ProductList>
        {products.map((product, index) => {
          return (
            <ProductContainer key={index}>
              <ProductImage src={product.image} />
              <span id="product-name">{product.name}</span>
              <span id="product-price">{product.price}</span>
              <ShopButton>Adicionar ao carrinho</ShopButton>
            </ProductContainer>
          );
        })}
      </ProductList>
    </ShopContainer>
  );
}
