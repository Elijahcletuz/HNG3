import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './Checkout.css';
import visa from '../../assets/Visa.svg';
import mastercard from '../../assets/mastercard.svg';
import paypal from '../../assets/paypal.svg';
import check from '../../assets/charm_circle-tick.svg';
import close from '../../assets/Close_square.svg';
import decrease from '../../assets/Expand_down.svg';
import   increase from '../../assets/Expand_up.svg';

const Checkout = () => {
  const location = useLocation();
  const { cart: initialCart } = location.state || { cart: [] };
  const [cart, setCart] = useState(initialCart);
  const [subtotal, setSubtotal] = useState(0);

  useEffect(() => {
    const newSubtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    setSubtotal(newSubtotal);
  }, [cart]);

  // Calculate delivery fee
  const deliveryFee = cart.length === 0 ? 0 : 2000 + (Object.keys(cart.reduce((acc, item) => {
    acc[item.title] = true;
    return acc;
  }, {})).length - 1) * 500;

  // Calculate total with delivery fee
  const totalWithDelivery = subtotal + deliveryFee;

  const handleQuantityChange = (index, action) => {
    const newCart = [...cart];
    if (action === 'increase') {
      newCart[index].quantity += 1;
    } else if (action === 'decrease' && newCart[index].quantity > 1) {
      newCart[index].quantity -= 1;
    }
    setCart(newCart);
  };

  const handleRemoveItem = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  return (
    cart.length === 0 ? (
      <div className='nothing'>Nothing is in the cart</div>
    ) : (
      <div className='paycontainer'>
       

        <div className="flex_pay">
              <div className="flex_Pay_left">
              <div className="pay_heading">
                    <h1>Shopping Cart</h1>
                    <p>You have {cart.length} items in your cart</p>
              </div>
             <div className="itempreview">
             {cart.map((item, index) => (
              <div className='children' key={index}>
                <img src={item.productpicture} alt="" className='main_image' />
                <div className='quantity_container'>
                  <h4 className='quantity'>{item.quantity}</h4>
                  <div className='buttons_qty'>
                    <button className="adjust" onClick={() => handleQuantityChange(index, 'increase')}>
                      <div className='adjust_button'>
                        <div className="adjust_up">
                          <img src={increase} alt="Increase" />
                        </div>
                      </div>
                    </button>
                    <button className="adjust" onClick={() => handleQuantityChange(index, 'decrease')}>
                      <div className='adjust_button'>
                        <div className="adjust_down">
                          <img src={decrease} alt="Decrease" />
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
                <p className='push1'>{item.title}</p>
                
                <p className='push2'>₦{(item.price * item.quantity).toLocaleString()}</p>
                <div className='push3'>
                  <button className="remove" onClick={() => handleRemoveItem(index)}>
                    <img src={close} alt="Close" />
                  </button>
                </div>
              </div>
            ))}
          </div>

             </div>

          <div className="payment_info">
            
            <h1>Payment Info.</h1>
            <h3>Payment method</h3>
         
                
          
            <div className='methods'>
              <div className='bank'>
                <img src={visa} alt="" />
                <label htmlFor="visa"></label>
                <input type="radio" name="payment-method" id="visa" />
              </div>
              <div className='bank'>
                <img src={mastercard} alt="" />
                <label htmlFor="mastercard"></label>
                <input type="radio" name="payment-method" id="mastercard" />
              </div>
              <div className='bank'>
                <img src={paypal} alt="" />
                <label htmlFor="paypal"></label>
                <input type="radio" name="payment-method" id="paypal" />
              </div>
            </div>

            <form action="">
              <div className="form_item">
                <label htmlFor="name">Cardholder’s name</label>
                <input type="text" id="name" placeholder='Blue Oma'/>
              </div>

              <div className="form_item">
                <label htmlFor="cardNumber">Card number</label>
                <input type="text" id="cardNumber" placeholder='1111  2222  3333  4444' />
              </div>

              <div className="flexboth">
                <div className="form_item1">
                  <label htmlFor="expiry">Expiry date</label>
                  <input type="text" id="expiry" placeholder='23/2027'/>
                </div>
                <div className="form_item1">
                  <label htmlFor="cvv">CVV</label>
                  <input type="text" id="cvv" placeholder='123' />
                </div>
              </div>

              <div className="form_total">
                <p>Subtotal</p>
                <p>₦{subtotal.toLocaleString()}</p>
              </div>

              <div className="form_total">
                <p>Delivery</p>
                <p>₦{deliveryFee.toLocaleString()}</p>
              </div>

              <div className="form_total">
                <p>Total</p>
                <p>₦{totalWithDelivery.toLocaleString()}</p>
              </div>

              <div className="later">
                <img src={check} alt="" />
                <p>Save details for future payments</p>
              </div>
            </form>
            <button className='butch'>Checkout</button>
          </div>
        </div>
      </div>
    )
  );
}

export default Checkout;
