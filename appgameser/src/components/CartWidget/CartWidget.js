import cart from './img/shopping-cart.png';
import { useContext } from 'react';
import CartContext from '../../context/CartContext'

const CartWidget = () => {

    const { getProducts, totalProducts } = useContext(CartContext)

    return (
        <div className = 'cartWidget'>
            <img src={cart} alt="cart icon" />
            { totalProducts }
        </div>
    )
}

export default CartWidget