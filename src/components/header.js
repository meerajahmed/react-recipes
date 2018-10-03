import React from 'react';
import HeaderLink from './header-link';
import favicon from '../favicon.png';

const Header = () => (
  <div>
    <header className="flex items-center justify-between px4">
      <div>
        <img src={favicon} alt="react recipes logo" />
        <h1 className="h1 inline ml2">My Recipes</h1>
      </div>
      <nav>
        <HeaderLink to="/">
          {'Home'}
        </HeaderLink>
        <HeaderLink to="/favorites">
          {'Favorites'}
        </HeaderLink>
      </nav>
    </header>
  </div>
);

export default Header;
