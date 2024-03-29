import React from 'react';
import 'font-awesome/css/font-awesome.min.css';

const Header = () => {
  return (
    <header>
      <div className='header-center'>
        <h1>ACME STORE</h1>
        <div className='header-cart'>
          <img src={require('../cart.png')} alt='cart icon' />
          <span>1</span>
        </div>
      </div>
      <hr />
    </header>
  );
};
export default Header;
