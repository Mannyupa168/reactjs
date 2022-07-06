import './ItemListContainer.css';
import { getProducts, getCategoryByProducts } from '../../products.js'
import { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList.js'
import { useParams } from 'react-router-dom'
import { getDocs, collection, query, where } from 'firebase/firestore'
import { db } from '../../services/firebase/index'


const ItemListContainer = (props) => {

    const[products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()

    const collectionRef = categoryId 
    ? (query(collection(db, 'products'), where('category', '==', categoryId))) 
    : (collection(db, 'products'))

    useEffect(() => {
        setLoading(true)

        getDocs(collectionRef).then(response => {
            const products = response.docs.map(doc => {
                return { id: doc.id, ...doc.data()}
            })
            setProducts(products)
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })

        // if(!categoryId){
        //     getProducts().then(response => {
        //         setProducts(response) 
        //     } ).catch(error => {
        //         console.log(error)
        //     }).finally(() => {
        //         setLoading(false)
        //     })
        // }else{
        //     getCategoryByProducts(categoryId).then(response => {
        //         setProducts(response)
        //     }).catch(error => {
        //         console.log(error)
        //     }).finally(() => {
        //         setLoading(false)
        //     })
        // }
    }, [categoryId])

    if(loading){
        return(
            <h1>Loading...</h1>
        )
    }

    return (
            <div>
                <h1> {props.label} </h1>
                {products.length > 0 
                 ? <ItemList products = {products} />
                 : <h1>404</h1>}
            </div>
    )
}

export default ItemListContainer