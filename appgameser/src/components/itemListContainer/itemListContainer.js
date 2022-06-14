import './ItemListContainer.css';
import { getProducts } from '../../products.js'
import { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList.js'


const ItemListContainer = (props) => {

    const[products, setProducts] = useState([])

    useEffect(() => {
        getProducts().then(response => {
            setProducts(response)
            
        } )
    }, [])

    return (
            <div>
                <h1> {props.label} </h1>
                <ItemList products = {products} />
            </div>
    )
}

export default ItemListContainer