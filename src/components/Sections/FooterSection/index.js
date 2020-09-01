import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  FooterContainer,
  ToTheTop,
  SocialMedia,
  StoreInfo
} from './styles';

import StyledLink from '../../StyledLink';

export default function FooterSection() {
  return (
    <FooterContainer>
      <StyledLink smooth to="#homepage">
        <ToTheTop>
          <FontAwesomeIcon icon="chevron-up" size="3x" />
          Topo
        </ToTheTop>
      </StyledLink>

      <SocialMedia>
        <FontAwesomeIcon
          className="social-icon"
          icon={['fab', 'facebook-f']}
          size="2x"
        />
        <FontAwesomeIcon
          className="social-icon"
          icon={['fab', 'instagram']}
          size="2x"
        />
        <FontAwesomeIcon
          className="social-icon"
          icon={['fab', 'twitter']}
          size="2x"
        />
      </SocialMedia>
      <StoreInfo>
        ©2020 por André Pereira. Thriftshop Designs Ltda. - CPF/CNPJ:
        12.345.678/0000-01 - Av. Fulano Beltrano, 154 São Paulo, SP 12345-678
        contato@email.com - Telefone: (00) 00000-0000
      </StoreInfo>
    </FooterContainer>
  );
}
