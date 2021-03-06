import Item from '../Item/Item.js';

const ItemList = ({ products }) => {

    return (
        <ul className="container" >
            {products.map(product => <Item key={product.id} {...product}/>)}
        </ul>
    )
}

export default ItemList