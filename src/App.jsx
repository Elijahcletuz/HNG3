import './App.jsx';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './Components/Navbar/Navbar';
// import { Product } from './Components/Product/Product';
import { Cart } from './Components/Cart/Cart';
import { AddToCartPage } from './Components/AddToCartPage/AddToCartPage';
import { useState } from 'react';
import Checkout from './Components/Checkout/Checkout.jsx';

function App() {
  const [cart, setCart] = useState([]);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/Cart' element={<Cart cart={cart} setCart={setCart} />} />
        <Route path='/' element={<AddToCartPage cart={cart} setCart={setCart} />} />
      </Routes>
    </Router>
  );
}

export default App;



// import './App.jsx'
// import { HashRouter as Router, Routes, Route } from 'react-router-dom'
// import  { Navbar } from './Components/Navbar/Navbar';
// import  { Product } from './Components/Product/Product';
// import  { Cart } from './Components/Cart/Cart';
// import  { AddToCartPage  } from './Components/AddToCartPage/AddToCartPage';
// import { useState } from 'react';



// function App(){
//   const [cart, setCart] = useState([])
//   return (
//     <Router>
//        <Navbar />
//       <Routes>
//          <Route path='/'  element={<Product/>} />
//          <Route path='/Cart'  element={<Cart cart={cart} setCart={setCart} />} />
//          <Route path='/AddToCartPage' element={<AddToCartPage cart={cart} setCart={setCart} />} />
        
       
         
//       </Routes>
//     </Router>
//   )

// }

// export default App



