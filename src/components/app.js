import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './home';
import Header from './header';
import Favorites from './favorites';
import NotFound from './not-found';

const App = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/favorites" component={Favorites} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
