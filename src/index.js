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
    country: '',
    cardNumber: '',
    cardHolder: '',
    cvc: ''
  };
  handleName = e => {
    this.setState({
      name: e.target.value
    });
  };
  render() {
    return (
      <section>
        <h2>CHECKOUT</h2>
        <h3>DELIVERY ADDRESS</h3>
        <form>
          <label>
            FIRST NAME
            <input
              type='text'
              value={this.state.name}
              onChange={this.handleName}
            />
          </label>
          <label>
            LAST NAME
            <input
              type='text'
              value={this.state.surname}
              onChange={this.handleSurname}
            />
          </label>
          <label>
            E-MAIL
            <input
              type='email'
              value={this.state.email}
              onChange={this.handleEmail}
            />
          </label>
          <label>
            PHONE
            <input
              type='number'
              value={this.state.phone}
              onChange={this.handlePhone}
            />
          </label>
          <label>
            ADDRESS
            <input
              type='text'
              value={this.state.address}
              onChange={this.handleAddress}
            />
          </label>
          <label>
            ADDRESS CONT...
            <input
              type='text'
              value={this.state.addressCont}
              onChange={this.handleAddressCont}
            />
          </label>
          <label>
            ZIP CODE
            <input
              type='text'
              value={this.state.zipCode}
              onChange={this.handleZipCode}
            />
          </label>
          <label>
            CITY
            <input
              type='text'
              value={this.state.city}
              onChange={this.handleCity}
            />
          </label>
          <label>
            STATE
            <input
              type='text'
              value={this.state.state}
              onChange={this.handleState}
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
              value={this.state.cardNumber}
              onChange={this.handleCardNumber}
            />
          </label>
          <label>
            CARD HOLDER
            <input
              type='text'
              value={this.state.cardHolder}
              onChange={this.handleCardHolder}
            />
          </label>
          <label>
            CVC
            <input
              type='number'
              value={this.state.cvc}
              onChange={this.handleCvc}
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

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Checkout />
      </>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
