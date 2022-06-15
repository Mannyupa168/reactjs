import './NavBar.css';
// import logo from './img/sneakers.png'
// import search from './img/search.png'
// import user from './img/user.png';
// import cart from './img/shopping-cart.png';
import { NavLink, Link } from 'react-router-dom'

const NavBar = () => { 

    return (
        <header className="header">
            <div className="logo">
                   
                <div className="titleLogo">
                    <Link to="/">
                        O M G - S h o e s
                    </Link>
                </div>
                

                {/* <div className="iconsContainer">
                    <div>
                        <img src={search} alt="search icon" />
                    </div>
                
                    <div>
                        <img src={user} alt="user icon" />
                    </div>
            
                    <div>
                        <img src={cart} alt="cart icon" />
                    </div>
                </div> */}
            </div>

            
            <nav className="navbar">
               <NavLink to = '/category/sneakers' className = {( { isActive } ) => isActive ? 'Active' : 'Inactive'}>Sneakers</NavLink>
               <Link to = '/category/clothes'>Clothes</Link>
               <Link to = '/category/accessories'>Accessories</Link>
               <Link to = '/category/sneaker-care'>Sneaker Care</Link>
               <Link to = '/category/brands'>Brands</Link>
            </nav>
        </header>
    )
}

export default NavBar