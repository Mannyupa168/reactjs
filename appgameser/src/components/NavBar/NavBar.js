import './NavBar.css';
import navBarIcons from '../NavBarIcons/navBarIcons'

const navBar = () => { 

    return (
        <header className="header">
            <div className="logo">
                <img src='https://cdn-icons.flaticon.com/png/512/2872/premium/2872620.png?token=exp=1653896740~hmac=e9e1348a5b0b8d6347516f4b6cc79054' alt="" />
                   
                <div className="titleLogo">
                    O M G - S h o e s
                </div>
            </div>

            <nav className="navbar">
               <a href="#">Sneakers</a>
               <a href="#">Clothes</a>
               <a href="#">Accesories</a>
               <a href="#">Sneaker Care</a>
               <a href="#">Brands</a>
            </nav>
            
            <navBarIcons />
        </header>
    )
}

export default navBar