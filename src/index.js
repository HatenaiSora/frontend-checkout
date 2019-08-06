import 'font-awesome/css/font-awesome.min.css';
import './style.scss';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './js/header';
import Checkout from './js/checkout';
import Order from './js/order';

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <h2>CHECKOUT</h2>
        <main>
          <Order />
          <Checkout />
        </main>
      </>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
