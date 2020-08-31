import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Homepage from './pages/Homepage/index';

export default function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Homepage} />
    </BrowserRouter>
  );
}