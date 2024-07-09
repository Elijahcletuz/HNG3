
import PropTypes from 'prop-types';
import { Functioncart } from "../Functioncart";
import './AddToCartPage.css'; 

import item_image1 from '../../assets/bead1.png';
import item_image2 from '../../assets/ban2.jpg';
import item_image3 from '../../assets/bead3.jpg';
import item_image4 from '../../assets/bead4.jpg';
import item_image5 from '../../assets/bead5.jpg';
import item_image6 from '../../assets/bead6.jpg';
import item_image7 from '../../assets/bead7.jpg';
import item_image8 from '../../assets/bead8.jpg';
import item_image9 from '../../assets/headgear1.png';
import item_image10 from '../../assets/headgear2.jpg';
import item_image11 from '../../assets/headgear3.jpg';
import item_image12 from '../../assets/headgear4.jpg';
import item_image13 from '../../assets/headgear5.jpg';
import item_image14 from '../../assets/headgear6.png';


export function AddToCartPage({ cart, setCart }) {
  // Define product objects
  const headtie1 = { productpicture: item_image1, title: "Pearl Beaded", price: 4000, quantity: 1 };
  const headtie2 = { productpicture: item_image2, title: "Clustered Beaded ", price: 4000, quantity: 1 };
  const headtie3 = { productpicture: item_image3, title: "Turkey Stylish", price: 7000, quantity: 1 };
  const headtie4 = { productpicture: item_image4, title: "Aurora Crown", price: 3000, quantity: 1 };
  const headtie5 = { productpicture: item_image5, title: "Floral Beaded", price: 3000, quantity: 1 };
  const headtie6 = { productpicture: item_image6, title: "Czech Pearl", price: 3000, quantity: 1 };
  const headtie7 = { productpicture: item_image7, title: "Ivy Beaded", price: 3000, quantity: 1 };
  const headtie8 = { productpicture: item_image8, title: "Lace Crown", price: 2000, quantity: 1 };
  const headtie9 = { productpicture: item_image9, title: "Jeweled Jasmine", price: 10000, quantity: 1 };
  const headtie10 = { productpicture: item_image10, title: "Feathered Headgear", price: 12000, quantity: 1 };
  const headtie11 = { productpicture: item_image11, title: "Feathered String", price: 12000, quantity: 1 };
  const headtie12 = { productpicture: item_image12, title: "Feathered Allure", price: 18000, quantity: 1 };
  const headtie13 = { productpicture: item_image13, title: "Feathered Allure", price: 15000, quantity: 1 };
  const headtie14 = { productpicture: item_image14, title: "DIY Pearled Tiara", price: 10000, quantity: 1 };

  // Group products into arrays as per your requirement
  const firstFourProducts = [headtie1, headtie2, headtie3, headtie4];
  const secondFourProducts = [headtie5, headtie6, headtie7, headtie8];
  const thirdFourProducts = [headtie9, headtie10, headtie11];
  const fourthFourProducts = [headtie12, headtie13, headtie14];

  return (
    <div className="general_container">
     
         <div className='bridal_heading'>
             Bridal Headgears
         </div>
            <div className="line"></div>

         
            <div className="group_container headband">
                {firstFourProducts.map((product, index) => (
                <Functioncart key={index} product={product} cart={cart} setCart={setCart} />
                ))}
            </div>

            <div className="group_container headband">
                {secondFourProducts.map((product, index) => (
                <Functioncart key={index} product={product} cart={cart} setCart={setCart} />
                ))}
            </div>
      <div className="limited_heading">
                   Limited Editions
       </div>

      <div className='limiteds'>
            <div className="group1">
                {thirdFourProducts.map((product, index) => (
                <Functioncart key={index} product={product} cart={cart} setCart={setCart} />
                ))}
            </div>
        
            <div className="group1 ">
                {fourthFourProducts.map((product, index) => (
                <Functioncart key={index} product={product} cart={cart} setCart={setCart} />
                ))}
            </div> 
      </div>
    </div>
  );
}

AddToCartPage.propTypes = {
  cart: PropTypes.array.isRequired,
  setCart: PropTypes.func.isRequired
};

export default AddToCartPage;


