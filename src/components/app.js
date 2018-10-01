import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './home';
import Header from './header';
import Favorites from './favorites';

const App = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Route exact path="/" component={Home} />
      <Route path="/favorites" component={Favorites} />
    </div>
  </BrowserRouter>
);

export default App;
