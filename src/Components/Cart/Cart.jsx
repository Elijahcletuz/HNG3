import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import increase from '../../assets/Expand_down.svg';
import decrease from '../../assets/Expand_up.svg';
import close from '../../assets/Close_square.svg';
import arrow from '../../assets/arrowright.png';
import './Cart.css';

export function Cart({ cart, setCart }) {
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    let total = 0;
    cart.forEach(item => {
      total += item.price * item.quantity;
    });
    setTotalPrice(total);
  }, [cart]);

  const handleQuantityChange = (index, type) => {
    const newCart = [...cart];
    if (type === 'increase') {
      newCart[index].quantity += 1;
    } else if (type === 'decrease' && newCart[index].quantity > 1) {
      newCart[index].quantity -= 1;
    }
    setCart(newCart);
  };

  const handleRemoveItem = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  const deliveryFee = 2000 + (Object.keys(cart.reduce((acc, item) => {
    acc[item.title] = true;
    return acc;
  }, {})).length - 1) * 500;

  const totalWithDelivery = totalPrice + deliveryFee;

  return (
    <div className='cart_container'>
      <div className='cart_header'>
        Your Shopping Cart
      </div>

      {cart.length > 0 ? (
        <>
          <div className="cart_item_titles">
            <ul>
              <li className='productcart'>Product</li>
              <li className='spacecart'></li>
              <li className='cart_price'>Price</li>
              <li className='cart_quantity'>Qty</li>
              <li className='total_cart'>Total</li>
            </ul>
          </div>

          {cart.map((item, index) => (
            <div key={index} className='design_cart'>
              <img src={item.productpicture} alt="" className='cart_image' />
              <h2>{item.title}</h2>
              <h3>{item.price.toLocaleString()}</h3> {/* Format price with commas */}
              <div className='quantity_container'>
                <h4 className='quantity'>{item.quantity}</h4>
                <div className='buttons_qty'>
                  <button className="adjust" onClick={() => handleQuantityChange(index, 'increase')}>
                    <div className='adjust_button'>
                      <div className="adjust_up">
                        <img src={decrease} alt="Increase" />
                      </div>
                    </div>
                  </button>
                  <button className="adjust" onClick={() => handleQuantityChange(index, 'decrease')}>
                    <div className='adjust_button'>
                      <div className="adjust_down">
                        <img src={increase} alt="Decrease" />
                      </div>
                    </div>
                  </button>
                </div>
              </div>
              <p>₦{(item.price * item.quantity).toLocaleString()}</p> {/* Format total price with commas */}
              <img src={close} alt="Close" className="close_button" onClick={() => handleRemoveItem(index)} />
            </div>
          ))}
         
          <div className='checkout_container'>
            <div className='discount'>
              <h3>Do you have a Discount?</h3>
              <button className='discount_button'>
                Enter Your Coupon Code <img src={arrow} alt="" className='aroow_image' />
              </button>
            </div>
            <div className="checkout">
              <h3>Delivery</h3>
              <button className='indrive'>
                InDrive <span>-₦{deliveryFee.toLocaleString()}</span>
                <img src={increase} alt="Decrease" />
              </button>
              <h3>Total <span>₦{totalWithDelivery.toLocaleString()}</span></h3> {/* Display total with delivery fee */}
              <Link to={{ pathname: '/checkout' }} state={{ cart, totalPrice: totalWithDelivery }}> 
                <button className='proceed'>Proceed to Checkout</button>
              </Link>
            </div>
          </div>
        </>
      ) : (
        <div className="empty_cart_message">Nothing is in the cart</div>
      )}
    </div>
  );
}

Cart.propTypes = {
  cart: PropTypes.array.isRequired,
  setCart: PropTypes.func.isRequired
};

export default Cart;
