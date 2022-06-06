import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList.js'
import {useEffect} from 'react'
import useState from 'react'
import {getProducts} from '../ItemList/products.js'

const ItemListContainer = (props) => {

    const [products, setProducts] = useState([])

    const {label} = props;

    useEffect(() => {
        getProducts().then(response => {
            setProducts(response)
        })
    }, [])

    const productsComponents = products.map(product => {
        return (
            <li key={product.id}>
                {product.name}
            </li>
        )
    })

    return (
        <section>
            <div>
                <h1>{label}</h1>
            </div>
            <ul>
                {productsComponents}
            </ul>
        </section>
    )
}

export default ItemListContainer