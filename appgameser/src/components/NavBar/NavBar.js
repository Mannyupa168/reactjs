import './NavBar.css';
import logo from './img/sneakers.png'
import search from './img/search.png'
import user from './img/user.png';
import cart from './img/shopping-cart.png';

const NavBar = () => { 

    return (
        <header className="header">
            <div className="logo">

                <img src={logo} alt="" />
                   
                <div className="titleLogo">
                    O M G - S h o e s
                </div>
                

                <div className="iconsContainer">
                <div>
                    <img src={search} alt="search icon" />
                </div>
            
                <div>
                    <img src={user} alt="user icon" />
                </div>
        
                <div>
                    <img src={cart} alt="cart icon" />
                </div>
            </div>

            </div>

            
            <nav className="navbar">
               <a href="#">Sneakers</a>
               <a href="#">Clothes</a>
               <a href="#">Accesories</a>
               <a href="#">Sneaker Care</a>
               <a href="#">Brands</a>
            </nav>
        </header>
    )
}

export default NavBar