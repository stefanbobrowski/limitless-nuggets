import React from 'react';
import ReactDOM from 'react-dom';
import { Store } from './store';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { Flower } from './pages/Flower/Flower';
import { PreRolls } from './pages/PreRolls/PreRolls';
import { Concentrates } from './pages/Concentrates/Concentrates';
import { Vaporizers } from './pages/Vaporizers/Vaporizers';
import { Edibles } from './pages/Edibles/Edibles';
import { Accessories } from './pages/Accessories/Accessories';
import { Checkout } from './pages/Checkout/Checkout';
import { NoMatch } from './pages/NoMatch';
import App from './App';

ReactDOM.render(
  <Store>
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />}>
            <Route index element={<Home />} />
            <Route path='flower' element={<Flower />} />
            <Route path='pre-rolls' element={<PreRolls />} />
            <Route path='concentrates' element={<Concentrates />} />
            <Route path='vaporizers' element={<Vaporizers />} />
            <Route path='edibles' element={<Edibles />} />
            <Route path='accessories' element={<Accessories />} />
            <Route path='checkout' element={<Checkout />} />
            <Route path='*' element={<NoMatch />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  </Store>,
  document.getElementById('root')
);
