
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Functioncart } from "../Functioncart";
import './AddToCartPage.css';

// Import mobile images for items 1-8
import headtie1phone from '../../assets/bead1phone.png';
import headtie2phone from '../../assets/ban2phone.png';
import headtie3phone from '../../assets/bead3phone.png';
import headtie4phone from '../../assets/bead4phone.png';
import headtie5phone from '../../assets/bead5phone.jpg';
import headtie6phone from '../../assets/bead6phone.jpg';
import headtie7phone from '../../assets/bead7phone.png';
import headtie8phone from '../../assets/bead8phone.jpg';





import item_image9 from '../../assets/headgear1.png';
import item_image10 from '../../assets/headgear2.jpg';
import item_image11 from '../../assets/headgear3.jpg';
import item_image12 from '../../assets/headgear4.jpg';
import item_image13 from '../../assets/headgear5.jpg';
import item_image14 from '../../assets/headgear6.png';

// Import desktop images for all items
import headtie1 from '../../assets/beaded1.png';
import headtie2 from '../../assets/ban2.jpg';
import headtie3 from '../../assets/bead3.jpg';
import headtie4 from '../../assets/bead4.jpg';
import headtie5 from '../../assets/bead5.jpg';
import headtie6 from '../../assets/bead6.jpg';
import headtie7 from '../../assets/bead7.webp';
import headtie8 from '../../assets/bead8.jpg';

export function AddToCartPage({ cart, setCart }) {

    // Define product objects for items 1-8 with both desktop and mobile images
    const headtie1desktop = { productpicture: headtie1, title: "Pearl Beaded", price: 4000, quantity: 1 };
    const headtie1mobile = { productpicturePhone: headtie1phone, title: "Pearl Beaded", price: 4000, quantity: 1 };

    const headtie2desktop = { productpicture: headtie2, title: "Clustered Beaded", price: 4000, quantity: 1 };
    const headtie2mobile = { productpicturePhone: headtie2phone, title: "Clustered Beaded", price: 4000, quantity: 1 };

    const headtie3desktop = { productpicture: headtie3, title: "Turkey Stylish", price: 7000, quantity: 1 };
    const headtie3mobile = { productpicturePhone: headtie3phone, title: "Turkey Stylish", price: 7000, quantity: 1 };

    const headtie4desktop = { productpicture: headtie4, title: "Aurora Crown", price: 3000, quantity: 1 };
    const headtie4mobile = { productpicturePhone: headtie4phone, title: "Aurora Crown", price: 3000, quantity: 1 };

    const headtie5desktop = { productpicture: headtie5, title: "Floral Beaded", price: 3000, quantity: 1 };
    const headtie5mobile = { productpicturePhone: headtie5phone, title: "Floral Beaded", price: 3000, quantity: 1 };

    const headtie6desktop = { productpicture: headtie6, title: "Czech Pearl", price: 3000, quantity: 1 };
    const headtie6mobile = { productpicturePhone: headtie6phone, title: "Czech Pearl", price: 3000, quantity: 1 };

    const headtie7desktop = { productpicture: headtie7, title: "Ivy Beaded", price: 3000, quantity: 1 };
    const headtie7mobile = { productpicturePhone: headtie7phone, title: "Ivy Beaded", price: 3000, quantity: 1 };

    const headtie8desktop = { productpicture: headtie8, title: "Lace Crown", price: 2000, quantity: 1 };
    const headtie8mobile = { productpicturePhone: headtie8phone, title: "Lace Crown", price: 2000, quantity: 1 };

    // Define product objects for items 9-14 using existing desktop images
    const headtie9 = { productpicture: item_image9, title: "Jeweled Jasmine", price: 10000, quantity: 1 };
    const headtie10 = { productpicture: item_image10, title: "Feathered Headgear", price: 12000, quantity: 1 };
    const headtie11 = { productpicture: item_image11, title: "Feathered String", price: 12000, quantity: 1 };
    const headtie12 = { productpicture: item_image12, title: "Feathered Allure", price: 18000, quantity: 1 };
    const headtie13 = { productpicture: item_image13, title: "Feathered Allure", price: 15000, quantity: 1 };
    const headtie14 = { productpicture: item_image14, title: "DIY Pearled Tiara", price: 10000, quantity: 1 };

    // Group products into arrays as per your requirement
    const firstFourProducts = [headtie1desktop, headtie2desktop, headtie3desktop, headtie4desktop];
    const secondFourProducts = [headtie5desktop, headtie6desktop, headtie7desktop, headtie8desktop];
    const firstFourProductsMobile = [headtie1mobile, headtie2mobile, headtie3mobile, headtie4mobile];
    const secondFourProductsMobile = [headtie5mobile, headtie6mobile, headtie7mobile, headtie8mobile];

    const thirdFourProducts = [headtie9, headtie10, headtie11];
    const fourthFourProducts = [headtie12, headtie13, headtie14];

    return (
        <div>
            <div className="general_container">
                <div className='bridal_heading'>Bridal Headgears</div>
                <div className="line"></div>

                <div className="group_container headband desktopbead">
                    {firstFourProducts.map((product, index) => (
                        <div key={index} className="beads_image_container">
                            <Functioncart product={product} cart={cart} setCart={setCart} />
                        </div>
                    ))}
                </div>

                <div className="group_container headband desktopbead">
                    {secondFourProducts.map((product, index) => (
                        <div key={index} className="beads_image_container">
                            <Functioncart product={product} cart={cart} setCart={setCart} />
                        </div>
                    ))}
                </div>


                <div className="group_container headband phonebeads">
    {firstFourProductsMobile.map((product, index) => (
        <div key={index} className="beads_image_container">
            <Functioncart product={product} cart={cart} setCart={setCart} />
        </div>
    ))}
</div>

<div className="group_container headband phonebeads">
    {secondFourProductsMobile.map((product, index) => (
        <div key={index} className="beads_image_container">
            <Functioncart product={product} cart={cart} setCart={setCart} />
        </div>
    ))}
</div>


                <div className="limited_heading">Limited Editions</div>

                <div className='limiteds'>
                    <div className="group1">
                        {thirdFourProducts.map((product, index) => (
                            <div key={index} className="limitimage">
                                <Functioncart product={product} cart={cart} setCart={setCart} />
                            </div>
                        ))}
                    </div>
                    <div className="group1">
                        {fourthFourProducts.map((product, index) => (
                            <div key={index} className="limitimage">
                                <Functioncart product={product} cart={cart} setCart={setCart} />
                            </div>
                        ))}
                    </div>
                </div>

            </div>
            <footer>
                <Link to='/' className='link-style'>
                    <h1>YTBridal</h1>
                </Link>
                <div className="line3"></div>
                <h6>All rights reserved</h6>
            </footer>
        </div>
    );
}

AddToCartPage.propTypes = {
    cart: PropTypes.array.isRequired,
    setCart: PropTypes.func.isRequired
};

export default AddToCartPage;








// import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
// import { Functioncart } from "../Functioncart";
// import './AddToCartPage.css';
// import item_image1 from '../../assets/bead1.png';
// import item_image2 from '../../assets/ban2.jpg';
// import item_image3 from '../../assets/bead3.jpg';
// import item_image4 from '../../assets/bead4.jpg';
// import item_image5 from '../../assets/bead5.jpg';
// import item_image6 from '../../assets/bead6.jpg';
// import item_image7 from '../../assets/bead7.jpg';
// import item_image8 from '../../assets/bead8.jpg';
// import item_image9 from '../../assets/headgear1.png';
// import item_image10 from '../../assets/headgear2.jpg';
// import item_image11 from '../../assets/headgear3.jpg';
// import item_image12 from '../../assets/headgear4.jpg';
// import item_image13 from '../../assets/headgear5.jpg';
// import item_image14 from '../../assets/headgear6.png';

// export function AddToCartPage({ cart, setCart }) {
//     // Define product objects
//     const headtie1 = { productpicture: item_image1, title: "Pearl Beaded", price: 4000, quantity: 1 };
//     const headtie2 = { productpicture: item_image2, title: "Clustered Beaded ", price: 4000, quantity: 1 };
//     const headtie3 = { productpicture: item_image3, title: "Turkey Stylish", price: 7000, quantity: 1 };
//     const headtie4 = { productpicture: item_image4, title: "Aurora Crown", price: 3000, quantity: 1 };
//     const headtie5 = { productpicture: item_image5, title: "Floral Beaded", price: 3000, quantity: 1 };
//     const headtie6 = { productpicture: item_image6, title: "Czech Pearl", price: 3000, quantity: 1 };
//     const headtie7 = { productpicture: item_image7, title: "Ivy Beaded", price: 3000, quantity: 1 };
//     const headtie8 = { productpicture: item_image8, title: "Lace Crown", price: 2000, quantity: 1 };
//     const headtie9 = { productpicture: item_image9, title: "Jeweled Jasmine", price: 10000, quantity: 1 };
//     const headtie10 = { productpicture: item_image10, title: "Feathered Headgear", price: 12000, quantity: 1 };
//     const headtie11 = { productpicture: item_image11, title: "Feathered String", price: 12000, quantity: 1 };
//     const headtie12 = { productpicture: item_image12, title: "Feathered Allure", price: 18000, quantity: 1 };
//     const headtie13 = { productpicture: item_image13, title: "Feathered Allure", price: 15000, quantity: 1 };
//     const headtie14 = { productpicture: item_image14, title: "DIY Pearled Tiara", price: 10000, quantity: 1 };

//     // Group products into arrays as per your requirement
//     const firstFourProducts = [headtie1, headtie2, headtie3, headtie4];
//     const secondFourProducts = [headtie5, headtie6, headtie7, headtie8];
//     const thirdFourProducts = [headtie9, headtie10, headtie11];
//     const fourthFourProducts = [headtie12, headtie13, headtie14];

//     return (
//         <div>
//             <div className="general_container">
//             <div className='bridal_heading'>Bridal Headgears</div>
//             <div className="line"></div>
            
//             <div className="group_container headband">
//                 {firstFourProducts.map((product, index) => (
//                     <div key={index} className="beads_image_container">
//                         <Functioncart product={product} cart={cart} setCart={setCart} />
//                     </div>
//                 ))}
//             </div>

//             <div className="group_container headband">
//                 {secondFourProducts.map((product, index) => (
//                     <div key={index} className="beads_image_container">
//                         <Functioncart product={product} cart={cart} setCart={setCart} />
//                     </div>
//                 ))}
//             </div>
            
//             <div className="limited_heading">Limited Editions</div>
            
//             <div className='limiteds'>
//                 <div className="group1">
//                     {thirdFourProducts.map((product, index) => (
//                         <div key={index} className="limitimage">
//                             <Functioncart product={product} cart={cart} setCart={setCart} />
//                         </div>
//                     ))}
//                 </div>
//                 <div className="group1">
//                     {fourthFourProducts.map((product, index) => (
//                         <div key={index} className="limitimage">
//                             <Functioncart product={product} cart={cart} setCart={setCart} />
//                         </div>
//                     ))}
//                 </div> 
//             </div>

            
//         </div>
//         <footer>
//                 <Link to='/' className='link-style'>
//                     <h1>YTBridal</h1>
//                 </Link>
//                 <div className="line3"></div>
//                 <h6>All rights reserved</h6>
//             </footer>
//         </div>
//     );
// }

// AddToCartPage.propTypes = {
//     cart: PropTypes.array.isRequired,
//     setCart: PropTypes.func.isRequired
// };

// export default AddToCartPage;
