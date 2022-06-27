import { Link } from 'react-router-dom'

const Item = ({ id, img, name, price }) => {

    return(
        <article className="container">
            <div className="item">
                <picture>
                    <img src={img} alt='{name}'/>
                </picture>
                <div className="productInfo">
                    <li>
                        {name} 
                    </li>
                    <li>
                        $ {price}
                    </li>
                </div>
                <div className="detailsBtn">
                    <Link to = {`/detail/${id}`} className="option">Ver detalle</Link>
                </div>
            </div>
        </article>
    )
}

export default Item