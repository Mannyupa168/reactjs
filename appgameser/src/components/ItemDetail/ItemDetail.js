import Counter from '../Counter/Counter'
import { useContext } from 'react'
import { Context } from '../../App'

const ItemDetail = ({ id, name, img, stock, price }) => {

    const { cart, setCart} = useContext(Context)

    const handleOnAdd = (quantity) => {
        console.log(`Se agregaron  ${quantity} ${name}`)
        setCart([...cart, {id, name, price, quantity}])
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

                <Counter onAdd = {handleOnAdd} stock = {stock} />
                {/* <InputCount onAdd = {handleOnAdd} /> */}
            </div>
        </div>
    )
}

export default ItemDetail