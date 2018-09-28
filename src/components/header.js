import React from 'react';
import favicon from '../favicon.png';

const Header = () => (
  <div>
    <header className="px4">
      <img src={favicon} alt="react recipes logo" />
      <h1 className="h1 inline ml2">My Recipes</h1>
    </header>
  </div>
);

export default Header;
