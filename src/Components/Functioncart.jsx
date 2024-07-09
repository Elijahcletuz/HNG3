// import React from 'react';
import PropTypes from 'prop-types';

import addcart from '../assets/basket.svg';

export function Functioncart({ product, cart, setCart }) {
    function handleClick() {
        setCart([...cart, product]);
    }

    return (
        
        <div >
            <img src={product.productpicture} alt={product.title} />
            <h2>{product.title}</h2>
            <p>Price: ${product.price}</p>
            <button onClick={handleClick} className="add-to-cart-button">
         <div>
            {cart.find((item) => item.title === product.title) ? (
               <div className="add-text add_cart_icon"><img src={addcart} alt="" />
            <h6>Add to Cart</h6></div>
            ) : (
                <div className="add-text add_cart_icon"><img src={addcart} alt="" />
            <h6>Add to Cart</h6></div>
            )}
         </div>

      
</button>


            <div></div>
              
        </div>
    );
}

Functioncart.propTypes = {
    product: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
    cart: PropTypes.array.isRequired,
    setCart: PropTypes.func.isRequired
};

export default Functioncart;