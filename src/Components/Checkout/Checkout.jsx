// import React from 'react'
import './Checkout.css';
import child1 from '../../assets/bead1.png';
import child2 from '../../assets/ban2.jpg';
import child3 from '../../assets/bead3.jpg';
// import up from '../../assets/Expand_down.svg';
// import down from '../../assets/Expand_up.svg';
import close from '../../assets/Close_square.svg';
import visa  from '../../assets/Visa.svg';
import mastercard from '../../assets/mastercard.svg';
import paypal from '../../assets/paypal.svg';
import check from '../../assets/charm_circle-tick.svg';

const Checkout = () => {
  return (
    <div className='paycontainer'>
         <div className="pay_heading">
              <h1>Shopping Cart</h1>
             <p>You have 3 items in your cart</p>
         </div>

         <div className="flex_pay">
         <div className="itempreview">
           
           <div className="children">
               <img src={child1} alt="" className='main_image' />
               <p className='push1'>Feathered Headgear</p>
                
               <p className='push2' >₦24,000</p>
               <div className='push3'><img src={close} alt="" /></div>

           </div>
           
           <div className="children">
               <img src={child2} alt="" className='main_image'/>
               <p className='push1'>Feathered Headgear</p>
              
               <p className='push2'>₦24,000</p>
               <div className='push3'> <img src={close} alt="" /></div>

           </div>
           

           <div className="children">
               <img src={child3} alt=""  className='main_image'/>
               <p className='push1'>Feathered Headgear</p>
              
               <p className='push2'>₦24,000</p>
               <div className='push3'><img src={close} alt="" /></div>

           </div>
           
       </div>

       <div className="payment_info" >
           <h1>Payment Info.</h1>

           <h3>Payment method</h3>
           <div className='methods'> 
           <div className='bank'>
                   <img src={visa} alt="" />
                   <label htmlFor="visa"></label>
                   <input type="radio" name="" id="visa" />
               </div>

               <div className='bank'>
                   <img src={mastercard} alt="" />
                   <label htmlFor="mastercard"></label>
                   <input type="radio" name="" id="mastercard" />
               </div>

               <div className='bank'>
                   <img src={paypal} alt="" />
                   <label htmlFor="paypal"></label>
                   <input type="radio" name="" id="paypal" />
               </div>
           </div>

           <form action="">
             
               <div className="form_item">
                   <label htmlFor="text">Cardholder’s name</label>
                   <input type="text" placeholder='Blue Oma'/>
               </div>

               <div className="form_item">
                   <label htmlFor="text">Card number</label>
                   <input type="text" placeholder='1111  2222  3333  4444' />
               </div>

                <div className="flexboth">
                        <div className="form_item1">
                        <label htmlFor="text">Expiry date</label>
                        <input type="text"  placeholder='23/2027'/>
                    </div>

                    <div className="form_item1">
                        <label htmlFor="text">CVV</label>
                        <input type="text" placeholder='123' />
                    </div>
                </div>

               <div className="form_total">
                   <p>Subtotal</p>
                   <p>₦43,000</p>
               </div>

               <div className="form_total">
                   <p>Delivery</p>
                   <p>₦2000</p>
               </div>

               <div className="form_total">
                   <p>Total</p>
                   <p>₦45,000</p>
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
}

export default Checkout
