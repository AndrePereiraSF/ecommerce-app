import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Title from '../../Title';
import { AboutContainer, BenefitsContainer, BenefitItem } from './styles';

import benefits from '../../../utils/constants/benefits';

export default function AboutSection() {
  return (
    <AboutContainer id="about">
      <Title color="#000">SOBRE</Title>
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
        {benefits.map((item, index) => {
          return (
            <BenefitItem key={index}>
              <FontAwesomeIcon icon={item.icon} size="3x" />
              <br />
              {item.title}
            </BenefitItem>
          );
        })}
      </BenefitsContainer>
    </AboutContainer>
  );
}