import { useState, useEffect } from 'react'
import { getProductById } from '../../products'
import ItemDetail from '../ItemDetail/ItemDetail.js'
import { useParams } from 'react-router-dom'

import { getDoc, doc } from 'firebase/firestore'
import { db } from '../../services/firebase'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState()

    const { productId } = useParams()

    useEffect(() => {
        const docRef = doc(db, 'products', productId)
        
        getDoc(docRef).then(doc => {
            const productFormatted = {id: doc.id, ...doc.data}
            setProduct(productFormatted)
        }).catch(error => {
            console.log(error)
        })

        // getProductById(productId).then(response => {
        //     setProduct(response)
        // })
    }, [productId])

    return (
        <div>
            <h1>Detalle de producto</h1>
            <ItemDetail {...product} />
        </div>
    )
}

export default ItemDetailContainer