import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faBars,
  faShoppingCart,
  faLeaf,
  faSeedling,
  faTshirt,
  faWater,
  faChevronUp,
} from '@fortawesome/free-solid-svg-icons';

import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

import Homepage from './pages/Homepage/index.js';

library.add(
  faBars,
  faShoppingCart,
  faLeaf,
  faSeedling,
  faTshirt,
  faWater,
  faChevronUp,
  faFacebookF,
  faInstagram,
  faTwitter
);

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto Condensed', sans-serif;
  }

  body {
    background: #000;
  }
`;

export default function App() {
  return (
    <>
      <GlobalStyle whiteColor />
      <Homepage />
    </>
  );
}
