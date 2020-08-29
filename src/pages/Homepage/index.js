import React from 'react';

import {
  Header,
  CartCounter,
  CartContainer,
  TitleBackgroundContainer,
  TitleContainer,
  Divider,
  ShopContainer,
  ProductContainer,
  ProductImage,
  FooterBackgroundContainer,
  AboutContainer,
  BenefitsContainer,
  BenefitsFlexRow,
  ContactContainer,
  FooterContainer,
  ButtonToTheTop,
  SocialMedia,
  StoreInfo,
} from './styles';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
];

export default function Homepage() {
  return (
    <>
      <Header>
        <CartContainer>
          <FontAwesomeIcon icon="shopping-cart" size="3x" />
          <CartCounter>0</CartCounter>
        </CartContainer>
        <FontAwesomeIcon icon="bars" size="3x" />
      </Header>

      <TitleBackgroundContainer>
        <TitleContainer>
          <h1 id="title">
            THRIFTSHOP DESIGNS
          </h1>
          <Divider />
          <h2 id="subtitle">COLEÇÃO URBANA</h2>
        </TitleContainer>
      </TitleBackgroundContainer>

      <ShopContainer>
        <h2>COMPRAR</h2>
        <ShopContainer>
          {products.map((product, index) => {
            return (
              <ProductContainer key={index}>
                <ProductImage src={product.image} />
                <span id="product-name">{product.name}</span>
                <span id="product-price">{product.price}</span>
              </ProductContainer>
            );
          })}
        </ShopContainer>
      </ShopContainer>

      <AboutContainer>
        <h2>Sobre</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non
          imperdiet enim, nec lacinia dui. Nam at pellentesque nunc. Nulla massa
          sapien, mattis eget pellentesque accumsan, interdum eu quam. Donec
          pretium, nisi eu sagittis pretium, dolor lorem tincidunt lacus, eu
          pulvinar nunc urna eget massa. Mauris id lorem elementum, consectetur
          turpis eget, ultricies nisl. Integer lectus arcu, consequat at sem et,
          porta efficitur lacus.
        </p>
        <BenefitsContainer>
          <BenefitsFlexRow>
            <div id="organic">
              <FontAwesomeIcon icon="leaf" size="3x" />
              Orgânico
            </div>
            <div id="cotton">
              <FontAwesomeIcon icon="seedling" size="3x" />
              100% Algodão
            </div>
          </BenefitsFlexRow>
          <BenefitsFlexRow>
            <div id="water-proof">
              <FontAwesomeIcon icon="tint" size="3x" />À prova d'água
            </div>
            <div id="washable">
              <FontAwesomeIcon icon="water" size="3x" />
              Lavável
            </div>
          </BenefitsFlexRow>
        </BenefitsContainer>
      </AboutContainer>

      <FooterBackgroundContainer>
        <ContactContainer>
          <h2>CONTATO</h2>
          <p>(00) 00000-0000 / contato@email.com</p>
          <p>Av. Fulano Beltrano, 154 - São Paulo - SP - CEP: 12345-678</p>
        </ContactContainer>
      </FooterBackgroundContainer>

      <FooterContainer>
        <ButtonToTheTop>
          <FontAwesomeIcon icon="chevron-up" size="3x" />
          Topo
        </ButtonToTheTop>
        <SocialMedia>
          <FontAwesomeIcon icon={['fab', 'facebook-f']} size="2x" />
          <FontAwesomeIcon icon={['fab', 'instagram']} size="2x" />
          <FontAwesomeIcon icon={['fab', 'twitter']} size="2x" />
        </SocialMedia>
        <StoreInfo>
          ©2020 por André Pereira. Thriftshop Designs Ltda. - CPF/CNPJ:
          12.345.678/0000-01 - Av. Fulano Beltrano, 154 São Paulo, SP 12345-678
          contato@email.com - Telefone: (00) 00000-0000
        </StoreInfo>
      </FooterContainer>
    </>
  );
}
