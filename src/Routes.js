import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Homepage from './pages/Homepage';
import Cart from './pages/Cart';
import FooterSection from './components/Sections/FooterSection';
import Header from './components/Header';
import Login from './pages/Login';
import Register from './pages/Register';
import { useUserSelector } from './store/reducers/user';


export default function Routes() {
  const userState = useUserSelector();
  return (
    <BrowserRouter>
      {userState.token ? <Header /> : null}
      <Route exact path="/" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/homepage" exact component={Homepage} />
      <Route path="/cart" component={Cart} />
      {userState.token ? <FooterSection /> : null}
    </BrowserRouter>
  );
}
