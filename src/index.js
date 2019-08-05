import 'font-awesome/css/font-awesome.min.css';
import './style.scss';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const Header = () => {
  return (
    <header>
      <div className='header-center'>
        <h1>ACME STORE</h1>
        <div className='header-cart'>
          <i className='fa fa-shopping-cart' />
          <span>1</span>
        </div>
      </div>
      <hr />
    </header>
  );
};

class Checkout extends Component {
  state = {
    name: '',
    surname: '',
    email: '',
    phone: '',
    address: '',
    addressCont: '',
    zipCode: '',
    city: '',
    state: '',
    cardNumber: '',
    cardHolder: '',
    cvc: ''
  };
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  render() {
    return (
      <section>
        <h3>DELIVERY ADDRESS</h3>
        <form>
          <label>
            FIRST NAME
            <input
              type='text'
              name='name'
              value={this.state.name}
              onChange={this.handleChange}
            />
          </label>
          <label>
            LAST NAME
            <input
              type='text'
              name='surname'
              value={this.state.surname}
              onChange={this.handleChange}
            />
          </label>
          <label>
            E-MAIL
            <input
              type='email'
              name='email'
              value={this.state.email}
              onChange={this.handleChange}
            />
          </label>
          <label>
            PHONE
            <input
              type='number'
              name='phone'
              value={this.state.phone}
              onChange={this.handleChange}
            />
          </label>
          <label>
            ADDRESS
            <input
              type='text'
              name='address'
              value={this.state.address}
              onChange={this.handleChange}
            />
          </label>
          <label>
            ADDRESS CONT...
            <input
              type='text'
              name='addressCont'
              value={this.state.addressCont}
              onChange={this.handleChange}
            />
          </label>
          <label>
            ZIP CODE
            <input
              type='text'
              name='zipCode'
              value={this.state.zipCode}
              onChange={this.handleChange}
            />
          </label>
          <label>
            CITY
            <input
              type='text'
              name='city'
              value={this.state.city}
              onChange={this.handleChange}
            />
          </label>
          <label>
            STATE
            <input
              type='text'
              name='state'
              value={this.state.state}
              onChange={this.handleChange}
            />
          </label>
          <label>
            COUNTRY
            <select>
              <option>UNITED STATES</option>
              <option>POLAND</option>
            </select>
          </label>
        </form>
        <h3>PAYMENT</h3>
        <form>
          <label>
            CARD NUMBER
            <input
              type='number'
              name='cardNumber'
              value={this.state.cardNumber}
              onChange={this.handleChange}
            />
          </label>
          <label>
            CARD HOLDER
            <input
              type='text'
              name='cardHolder'
              value={this.state.cardHolder}
              onChange={this.handleChange}
            />
          </label>
          <label>
            CVC
            <input
              type='number'
              name='cvc'
              value={this.state.cvc}
              onChange={this.handleChange}
            />
          </label>
          <button type='submit' onClick={this.handleSubmit}>
            CHECKOUT
          </button>
        </form>
      </section>
    );
  }
}

const Order = () => {
  return (
    <>
      <h3>ORDER</h3>
      <div className='order'>
        <div className='order-product'>
          <div className='product-info'>
            <h4>ACME PRODUCT</h4>
            <div className='product-info_qty'>
              <span>Qty</span>
              <span>1</span>
            </div>
            <div className='product-info_price'>
              <span>Price</span>
              <span>$00</span>
            </div>
          </div>
          <img alt='product' src='https://fakeimg.pl/70/683a8a/' />
        </div>
        <hr />
        <div className='order-sum'>
          <div>
            <span>Subtotal</span>
            <span>$00,000</span>
          </div>
          <div>
            <span>Tax</span>
            <span>$00</span>
          </div>
          <div>
            <span>Shipping</span>
            <span>$00</span>
          </div>
          <div>
            <span>Total</span>
            <span>$00,000</span>
          </div>
        </div>
      </div>
    </>
  );
};

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <h2>CHECKOUT</h2>
        <Order />
        <Checkout />
      </>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
