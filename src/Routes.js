import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Homepage from './pages/Homepage';
import Cart from './pages/Cart';
import FooterSection from './components/Sections/FooterSection';
import Header from './components/Header';

export default function Routes() {
  return (
    <BrowserRouter>
      <Header />
      <Route path="/" exact component={Homepage} />
      <Route path="/cart" component={Cart} />
      <FooterSection />
    </BrowserRouter>
  );
}