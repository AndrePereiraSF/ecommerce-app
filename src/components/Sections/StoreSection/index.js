import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import Title from '../../Title';
import {
  ShopContainer,
  ProductList,
  ProductContainer,
  ProductImage,
} from './styles';

import Button from '../../Button';
import { CartActions } from '../../../store/reducers/cart';
import { useUserSelector } from '../../../store/reducers/user';

export default function StoreSection({ products }) {
  const dispatch = useDispatch();
  const { cart_id } = useUserSelector();

  const AddItemToCart = item => {
    dispatch(CartActions.addToCart(item, cart_id));
  };

  return (
    <ShopContainer id="shop">
      <Title>COMPRAR</Title>
      <ProductList>
        {products.map((product, index) => {
          return (
            <ProductContainer key={index}>
              <ProductImage src={product.data.image} />
              <span id="product-name">{product.data.name}</span>
              <span id="product-price">R${product.data.price}</span>
              <Button onClick={() => AddItemToCart(product.data)}>
                Adicionar ao carrinho
              </Button>
            </ProductContainer>
          );
        })}
      </ProductList>
    </ShopContainer>
  );
}
