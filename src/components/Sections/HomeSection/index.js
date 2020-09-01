import React from 'react';

import {
  TitleBackgroundContainer,
  TitleContainer,
} from './styles';

import Divider from '../../Divider';

export default function HomeSection() {
  return (
    <TitleBackgroundContainer>
      <TitleContainer>
        <h1 id="title">THRIFTSHOP DESIGNS</h1>
        <Divider />
        <h2 id="subtitle">COLEÇÃO URBANA</h2>
      </TitleContainer>
    </TitleBackgroundContainer>
  );
}
