import React from 'react';

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

export default Order;
