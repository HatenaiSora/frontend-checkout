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
    checkout: false,
    name: '',
    surname: '',
    email: '',
    phone: '',
    address: '',
    addressCont: '',
    zipCode: '',
    city: '',
    state: '',
    country: 'United States',
    cardNumber: '',
    cardHolder: '',
    cvc: '',
    arrow: './down-arrow.png',
    info: false
  };
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  // handleSelect = e => {
  //   console.log(e.target.style.backgroundImage);
  //   if (this.state.arrow === './down-arrow.png') {
  //     this.setState({
  //       arrow: './up-arrow.png'
  //     });
  //   } else {
  //     this.setState({
  //       arrow: './down-arrow.png'
  //     });
  //   }
  // };

  handleCheckout = e => {
    e.preventDefault();
    if (
      this.state.name.length === 0 ||
      this.state.surname.length === 0 ||
      this.state.email.length === 0 ||
      this.state.address.length === 0 ||
      this.state.zipCode.length === 0 ||
      this.state.city.length === 0 ||
      this.state.state.length === 0 ||
      this.state.cardNumber.length === 0 ||
      this.state.cardHolder.length === 0 ||
      this.state.cvc.length === 0
    ) {
      this.setState({
        info: 'Please fill in all required fields'
      });
    } else if (this.state.email.indexOf('@') === -1) {
      this.setState({
        info: 'Your email needs to have an "@" sign'
      });
    } else if (this.state.zipCode.length < 5) {
      this.setState({
        info: 'Zip code should be at least 5-characters long'
      });
    } else if (this.state.cardNumber.length !== 16) {
      this.setState({
        info: 'Your card number should be 16-digits long'
      });
    } else if (this.state.cvc.length !== 3) {
      this.setState({
        info: 'Your CVC number should be 3-digits long'
      });
    } else {
      this.setState({
        checkout: true
      });
    }
  };

  render() {
    if (this.state.checkout) {
      return <h2>Thank you for shopping with us!</h2>;
    } else {
      return (
        <section className='checkout'>
          <h3>DELIVERY ADDRESS</h3>
          <form>
            <label>
              FIRST NAME <span>&#8226;</span>
              <br />
              <input
                type='text'
                name='name'
                value={this.state.name}
                onChange={this.handleChange}
              />
            </label>
            <label>
              LAST NAME <span>&#8226;</span>
              <br />
              <input
                type='text'
                name='surname'
                value={this.state.surname}
                onChange={this.handleChange}
              />
            </label>
            <label>
              E-MAIL <span>&#8226;</span>
              <br />
              <input
                type='email'
                name='email'
                value={this.state.email}
                onChange={this.handleChange}
              />
            </label>
            <label>
              PHONE
              <br />
              <input
                type='number'
                name='phone'
                value={this.state.phone}
                onChange={this.handleChange}
              />
            </label>
            <label>
              ADDRESS <span>&#8226;</span>
              <br />
              <input
                type='text'
                name='address'
                value={this.state.address}
                onChange={this.handleChange}
              />
            </label>
            <label>
              ADDRESS CONT...
              <br />
              <input
                type='text'
                name='addressCont'
                value={this.state.addressCont}
                onChange={this.handleChange}
              />
            </label>
            <label>
              ZIP CODE <span>&#8226;</span>
              <br />
              <input
                type='text'
                name='zipCode'
                value={this.state.zipCode}
                onChange={this.handleChange}
              />
            </label>
            <label>
              CITY <span>&#8226;</span>
              <br />
              <input
                type='text'
                name='city'
                value={this.state.city}
                onChange={this.handleChange}
              />
            </label>
            <label>
              STATE <span>&#8226;</span>
              <br />
              <input
                type='text'
                name='state'
                value={this.state.state}
                onChange={this.handleChange}
              />
            </label>
            <label>
              COUNTRY <span>&#8226;</span>
              <br />
              <select
                value={this.state.country}
                onChange={this.handleChange}
                onClick={this.handleSelect}
                // style={{ backgroundImage: 'url(' + this.state.arrow + ')' }}
                name='country'
              >
                <option value='Afghanistan'>Afghanistan</option>
                <option value='Albania'>Albania</option>
                <option value='Algeria'>Algeria</option>
                <option value='American Samoa'>American Samoa</option>
                <option value='Andorra'>Andorra</option>
                <option value='Angola'>Angola</option>
                <option value='Anguilla'>Anguilla</option>
                <option value='Antartica'>Antarctica</option>
                <option value='Antigua and Barbuda'>Antigua and Barbuda</option>
                <option value='Argentina'>Argentina</option>
                <option value='Armenia'>Armenia</option>
                <option value='Aruba'>Aruba</option>
                <option value='Australia'>Australia</option>
                <option value='Austria'>Austria</option>
                <option value='Azerbaijan'>Azerbaijan</option>
                <option value='Bahamas'>Bahamas</option>
                <option value='Bahrain'>Bahrain</option>
                <option value='Bangladesh'>Bangladesh</option>
                <option value='Barbados'>Barbados</option>
                <option value='Belarus'>Belarus</option>
                <option value='Belgium'>Belgium</option>
                <option value='Belize'>Belize</option>
                <option value='Benin'>Benin</option>
                <option value='Bermuda'>Bermuda</option>
                <option value='Bhutan'>Bhutan</option>
                <option value='Bolivia'>Bolivia</option>
                <option value='Bosnia and Herzegowina'>
                  Bosnia and Herzegowina
                </option>
                <option value='Botswana'>Botswana</option>
                <option value='Bouvet Island'>Bouvet Island</option>
                <option value='Brazil'>Brazil</option>
                <option value='Brunei Darussalam'>Brunei Darussalam</option>
                <option value='Bulgaria'>Bulgaria</option>
                <option value='Burkina Faso'>Burkina Faso</option>
                <option value='Burundi'>Burundi</option>
                <option value='Cambodia'>Cambodia</option>
                <option value='Cameroon'>Cameroon</option>
                <option value='Canada'>Canada</option>
                <option value='Cape Verde'>Cape Verde</option>
                <option value='Cayman Islands'>Cayman Islands</option>
                <option value='Central African Republic'>
                  Central African Republic
                </option>
                <option value='Chad'>Chad</option>
                <option value='Chile'>Chile</option>
                <option value='China'>China</option>
                <option value='Christmas Island'>Christmas Island</option>
                <option value='Cocos Islands'>Cocos (Keeling) Islands</option>
                <option value='Colombia'>Colombia</option>
                <option value='Comoros'>Comoros</option>
                <option value='Congo'>Congo</option>
                <option value='Cook Islands'>Cook Islands</option>
                <option value='Costa Rica'>Costa Rica</option>
                <option value="Cota D'Ivoire">Cote d'Ivoire</option>
                <option value='Croatia'>Croatia (Hrvatska)</option>
                <option value='Cuba'>Cuba</option>
                <option value='Cyprus'>Cyprus</option>
                <option value='Czech Republic'>Czech Republic</option>
                <option value='Denmark'>Denmark</option>
                <option value='Djibouti'>Djibouti</option>
                <option value='Dominica'>Dominica</option>
                <option value='Dominican Republic'>Dominican Republic</option>
                <option value='East Timor'>East Timor</option>
                <option value='Ecuador'>Ecuador</option>
                <option value='Egypt'>Egypt</option>
                <option value='El Salvador'>El Salvador</option>
                <option value='Equatorial Guinea'>Equatorial Guinea</option>
                <option value='Eritrea'>Eritrea</option>
                <option value='Estonia'>Estonia</option>
                <option value='Ethiopia'>Ethiopia</option>
                <option value='Faroe Islands'>Faroe Islands</option>
                <option value='Fiji'>Fiji</option>
                <option value='Finland'>Finland</option>
                <option value='France'>France</option>
                <option value='France Metropolitan'>
                  France, Metropolitan
                </option>
                <option value='French Guiana'>French Guiana</option>
                <option value='French Polynesia'>French Polynesia</option>
                <option value='Gabon'>Gabon</option>
                <option value='Gambia'>Gambia</option>
                <option value='Georgia'>Georgia</option>
                <option value='Germany'>Germany</option>
                <option value='Ghana'>Ghana</option>
                <option value='Gibraltar'>Gibraltar</option>
                <option value='Greece'>Greece</option>
                <option value='Greenland'>Greenland</option>
                <option value='Grenada'>Grenada</option>
                <option value='Guadeloupe'>Guadeloupe</option>
                <option value='Guam'>Guam</option>
                <option value='Guatemala'>Guatemala</option>
                <option value='Guinea'>Guinea</option>
                <option value='Guinea-Bissau'>Guinea-Bissau</option>
                <option value='Guyana'>Guyana</option>
                <option value='Haiti'>Haiti</option>
                <option value='Honduras'>Honduras</option>
                <option value='Hong Kong'>Hong Kong</option>
                <option value='Hungary'>Hungary</option>
                <option value='Iceland'>Iceland</option>
                <option value='India'>India</option>
                <option value='Indonesia'>Indonesia</option>
                <option value='Iraq'>Iraq</option>
                <option value='Ireland'>Ireland</option>
                <option value='Israel'>Israel</option>
                <option value='Italy'>Italy</option>
                <option value='Jamaica'>Jamaica</option>
                <option value='Japan'>Japan</option>
                <option value='Jordan'>Jordan</option>
                <option value='Kazakhstan'>Kazakhstan</option>
                <option value='Kenya'>Kenya</option>
                <option value='Kiribati'>Kiribati</option>
                <option value='Korea'>Korea, Republic of</option>
                <option value='Kuwait'>Kuwait</option>
                <option value='Kyrgyzstan'>Kyrgyzstan</option>
                <option value='Lao'>Lao</option>
                <option value='Latvia'>Latvia</option>
                <option value='Lebanon'>Lebanon</option>
                <option value='Lesotho'>Lesotho</option>
                <option value='Liberia'>Liberia</option>
                <option value='Liechtenstein'>Liechtenstein</option>
                <option value='Lithuania'>Lithuania</option>
                <option value='Luxembourg'>Luxembourg</option>
                <option value='Macau'>Macau</option>
                <option value='Macedonia'>Macedonia</option>
                <option value='Madagascar'>Madagascar</option>
                <option value='Malawi'>Malawi</option>
                <option value='Malaysia'>Malaysia</option>
                <option value='Maldives'>Maldives</option>
                <option value='Mali'>Mali</option>
                <option value='Malta'>Malta</option>
                <option value='Marshall Islands'>Marshall Islands</option>
                <option value='Martinique'>Martinique</option>
                <option value='Mauritania'>Mauritania</option>
                <option value='Mauritius'>Mauritius</option>
                <option value='Mayotte'>Mayotte</option>
                <option value='Mexico'>Mexico</option>
                <option value='Micronesia'>Micronesia</option>
                <option value='Moldova'>Moldova</option>
                <option value='Monaco'>Monaco</option>
                <option value='Mongolia'>Mongolia</option>
                <option value='Montserrat'>Montserrat</option>
                <option value='Morocco'>Morocco</option>
                <option value='Mozambique'>Mozambique</option>
                <option value='Myanmar'>Myanmar</option>
                <option value='Namibia'>Namibia</option>
                <option value='Nauru'>Nauru</option>
                <option value='Nepal'>Nepal</option>
                <option value='Netherlands'>Netherlands</option>
                <option value='Netherlands Antilles'>
                  Netherlands Antilles
                </option>
                <option value='New Caledonia'>New Caledonia</option>
                <option value='New Zealand'>New Zealand</option>
                <option value='Nicaragua'>Nicaragua</option>
                <option value='Niger'>Niger</option>
                <option value='Nigeria'>Nigeria</option>
                <option value='Niue'>Niue</option>
                <option value='Norfolk Island'>Norfolk Island</option>
                <option value='Norway'>Norway</option>
                <option value='Oman'>Oman</option>
                <option value='Pakistan'>Pakistan</option>
                <option value='Palau'>Palau</option>
                <option value='Panama'>Panama</option>
                <option value='Papua New Guinea'>Papua New Guinea</option>
                <option value='Paraguay'>Paraguay</option>
                <option value='Peru'>Peru</option>
                <option value='Philippines'>Philippines</option>
                <option value='Pitcairn'>Pitcairn</option>
                <option value='Poland'>Poland</option>
                <option value='Portugal'>Portugal</option>
                <option value='Puerto Rico'>Puerto Rico</option>
                <option value='Qatar'>Qatar</option>
                <option value='Reunion'>Reunion</option>
                <option value='Romania'>Romania</option>
                <option value='Russia'>Russian Federation</option>
                <option value='Rwanda'>Rwanda</option>
                <option value='Saint LUCIA'>Saint LUCIA</option>
                <option value='Saint Vincent'>Saint Vincent</option>
                <option value='Samoa'>Samoa</option>
                <option value='San Marino'>San Marino</option>
                <option value='Saudi Arabia'>Saudi Arabia</option>
                <option value='Senegal'>Senegal</option>
                <option value='Seychelles'>Seychelles</option>
                <option value='Sierra'>Sierra Leone</option>
                <option value='Singapore'>Singapore</option>
                <option value='Slovakia'>Slovakia</option>
                <option value='Slovenia'>Slovenia</option>
                <option value='Solomon Islands'>Solomon Islands</option>
                <option value='Somalia'>Somalia</option>
                <option value='South Africa'>South Africa</option>
                <option value='Span'>Spain</option>
                <option value='SriLanka'>Sri Lanka</option>
                <option value='St. Helena'>St. Helena</option>
                <option value='Sudan'>Sudan</option>
                <option value='Suriname'>Suriname</option>
                <option value='Swaziland'>Swaziland</option>
                <option value='Sweden'>Sweden</option>
                <option value='Switzerland'>Switzerland</option>
                <option value='Syria'>Syrian Arab Republic</option>
                <option value='Taiwan'>Taiwan</option>
                <option value='Tajikistan'>Tajikistan</option>
                <option value='Tanzania'>Tanzania</option>
                <option value='Thailand'>Thailand</option>
                <option value='Togo'>Togo</option>
                <option value='Tokelau'>Tokelau</option>
                <option value='Tonga'>Tonga</option>
                <option value='Tunisia'>Tunisia</option>
                <option value='Turkey'>Turkey</option>
                <option value='Turkmenistan'>Turkmenistan</option>
                <option value='Tuvalu'>Tuvalu</option>
                <option value='Uganda'>Uganda</option>
                <option value='Ukraine'>Ukraine</option>
                <option value='United Arab Emirates'>
                  United Arab Emirates
                </option>
                <option value='United Kingdom'>United Kingdom</option>
                <option value='United States'>United States</option>
                <option value='Uruguay'>Uruguay</option>
                <option value='Uzbekistan'>Uzbekistan</option>
                <option value='Vanuatu'>Vanuatu</option>
                <option value='Venezuela'>Venezuela</option>
                <option value='Vietnam'>Viet Nam</option>
                <option value='Virgin Islands (British)'>
                  Virgin Islands (British)
                </option>
                <option value='Virgin Islands (U.S)'>
                  Virgin Islands (U.S.)
                </option>
                <option value='Wallis and Futana Islands'>
                  Wallis and Futuna Islands
                </option>
                <option value='Western Sahara'>Western Sahara</option>
                <option value='Yemen'>Yemen</option>
                <option value='Yugoslavia'>Yugoslavia</option>
                <option value='Zambia'>Zambia</option>
                <option value='Zimbabwe'>Zimbabwe</option>
              </select>
            </label>
          </form>
          <h3>PAYMENT</h3>
          <form>
            <label>
              CARD NUMBER <span>&#8226;</span>
              <br />
              <input
                type='number'
                name='cardNumber'
                value={this.state.cardNumber}
                onChange={this.handleChange}
              />
            </label>
            <label>
              CARD HOLDER <span>&#8226;</span>
              <br />
              <input
                type='text'
                name='cardHolder'
                value={this.state.cardHolder}
                onChange={this.handleChange}
              />
            </label>
            <label>
              CVC <span>&#8226;</span>
              <br />
              <input
                type='number'
                name='cvc'
                value={this.state.cvc}
                onChange={this.handleChange}
              />
            </label>
            <button type='submit' onClick={this.handleCheckout}>
              CHECKOUT
            </button>
          </form>
          <span className='info'>{this.state.info}</span>
        </section>
      );
    }
  }
}

const Order = () => {
  return (
    <>
      <div className='order'>
        <h3>ORDER</h3>
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
        <main>
          <Order />
          <Checkout />
        </main>
      </>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
