import cart from './img/shopping-cart.png';

const CartWidget = () => {
    return (
        <div className = 'cartWidget'>
            <img src={cart} alt="cart icon" />
            0
        </div>
    )
}

export default CartWidget