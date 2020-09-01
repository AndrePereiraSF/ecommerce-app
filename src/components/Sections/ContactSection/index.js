import React from 'react';

import {
  ContactBackgroundContainer,
  ContactContainer
} from './styles';
import Title from '../../Title';

export default function ContactSection() {
  return (
    <ContactBackgroundContainer id="contact">
      <ContactContainer>
        <Title>CONTATO</Title>
        <p>(00) 00000-0000 / contato@email.com</p>
        <p>Av. Fulano Beltrano, 154 - São Paulo - SP - CEP: 12345-678</p>
      </ContactContainer>
    </ContactBackgroundContainer>
  );
}
