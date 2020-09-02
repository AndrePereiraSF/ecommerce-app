import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Homepage from './pages/Homepage';
import Cart from './pages/Cart';
import FooterSection from './components/Sections/FooterSection';
import Header from './components/Header';
import Login from './pages/Login';
import Register from './pages/Register';

export default function Routes() {
  return (
    <BrowserRouter>
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      {/* <Header /> */}
      <Route path="/homepage" exact component={Homepage} />
      <Route path="/cart" component={Cart} />
      {/* <FooterSection /> */}
    </BrowserRouter>
  );
}