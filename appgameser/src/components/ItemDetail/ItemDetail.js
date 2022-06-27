import Counter from '../Counter/Counter'
import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import CartContext from '../../context/CartContext'

const ItemDetail = ({ id, name, img, stock, price }) => {

    const [productAdded, setProductsAdded] = useState(0)

    const { addItem } = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        console.log(`Se agregaron  ${quantity} ${name}`)
        addItem ({id, name, price, quantity})
        setProductsAdded(quantity)
    }

    return(
        <div className = "detail-container">
            <div className = "detail-item">
                <picture>
                    <img src={img} alt='{name}' />
                </picture>

                <div>
                    {name}
                </div>

                { productAdded === 0 
                    ? <Counter onAdd = {handleOnAdd} stock = {stock} />
                    : <Link to='/cart'> Finalizar Compra </Link>
                }
                {/* <InputCount onAdd = {handleOnAdd} /> */}
            </div>
        </div>
    )
}

export default ItemDetail