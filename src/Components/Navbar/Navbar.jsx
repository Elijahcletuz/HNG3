import './Navbar.css'
import { Link } from 'react-router-dom'
import search from '../../assets/search.svg'
import basket from '../../assets/basket.svg'
export function Navbar(){
  return(
    <nav>
        <Link to='/' className='link-style'>
            <h1>YTBridal</h1>
          </Link>
            
         <div className="icons">
             <img src={search}  alt="" />
           
              <div className='carts_container'>
                  <Link to='/Cart '><img src={basket} alt="" /></Link>
                  {/* <div className="cart_count">0</div> */}
              </div>
         </div>
    </nav>
  )

}


// import './Navbar.css'

// import search from '../../assets/search.svg'
// import user from '../../assets/user.svg'
// import cart from '../../assets/basket.svg'

// const Navbar = () => {
//   return (
//     <nav>
//          <ul>
//             <li>Home</li>
//             <li>About</li>
//             <li>Shop </li>
//          </ul>

//          <div>YourThrift</div>
            
//          <div className="icons">
//              <img src={search}  alt="" />
//               <div><img src={cart} alt="" /></div>
//               <div><img src={user} alt="" /></div>

//          </div>
//     </nav>
//   )
// }

// export default Navbar
