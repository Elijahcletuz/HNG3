import { useState } from 'react';
import PropTypes from 'prop-types';
import addcart from '../assets/basket.svg';

export function Functioncart({ product, cart, setCart }) {
    const [buttonText, setButtonText] = useState('Add to Cart');

    const handleClick = () => {
        const existingItemIndex = cart.findIndex(item => item.title === product.title);

        if (existingItemIndex !== -1) {
            const updatedCart = [...cart];
            updatedCart[existingItemIndex].quantity += 1;
            setCart(updatedCart);
        } else {
            setCart([...cart, { ...product, quantity: 1 }]);
        }

        setButtonText('Added');

        setTimeout(() => {
            setButtonText('Add to Cart');
        }, 500);
    };

    const imageSource = product.productpicturePhone || product.productpicture;

    return (
        <div>
            <img src={imageSource} alt={product.title} />
            <h2 className='phone_none'>{product.title}</h2>
            
            <div className='phone_cart'>
                <h2>{product.title}</h2>
                <button onClick={handleClick} className="add-to-cart-button">
                    <div className="add-text add_cart_icon">
                        <img src={addcart} alt="" />
                        <h6>{buttonText}</h6>
                    </div>
                </button>
            </div>
            
            <p>Price: ₦{product.price}</p>
            
            <button onClick={handleClick} className="add-to-cart-button">
                <div className='phone_none'>
                    <div className="add-text add_cart_icon">
                        <img src={addcart} alt="" />
                        <h6>{buttonText}</h6>
                    </div>
                </div>
            </button>
        </div>
    );
}

Functioncart.propTypes = {
    product: PropTypes.object.isRequired,
    cart: PropTypes.array.isRequired,
    setCart: PropTypes.func.isRequired
};

export default Functioncart;