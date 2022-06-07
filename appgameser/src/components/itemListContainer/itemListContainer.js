import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList.js'
import {useEffect} from 'react'
import useState from 'react'
import {getProducts} from '../../products.js'

const ItemListContainer = (props) => {

    const [products, setProducts] = useState([])

    const {label} = props;

    useEffect(() => {
        getProducts().then(response => {
            setProducts(response)
        })
    }, [])

    return (
        <section>
            <div>
                <h1>{label}</h1>
            </div>
            <ItemList product={products}/>
        </section>
    )
}

export default ItemListContainer