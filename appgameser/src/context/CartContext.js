import { createContext, useState, useEffect } from 'react';

const CartContext = createContext;

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    const [totalProducts, setTotalProducts] = useState(0)
    console.log(cart)
    
  useEffect(() => {
        let totalProducts = 0;

        cart.forEach(prod => {
            totalProducts += prod.products
        })
        setTotalProducts(totalProducts)
  }, [cart])

  const addItem = (productToAdd) => {
    if(!isInCart(productToAdd.id)) {
      setCart ([...cart, productToAdd])
    }
  }

  const removeItem = (id) => {
    const cartNoProducts = cart.filter(prod => prod.id !== id)
    setCart(cartNoProducts)
  }

  const isInCart = (id) => {
    return cart.some(prod => prod.id === id)
  }

    return(
        <CartContext.Provider value = {{ cart, totalProducts, addItem, removeItem, isInCart }} >
            { children }
        </CartContext.Provider>
    )
}

export default CartContext