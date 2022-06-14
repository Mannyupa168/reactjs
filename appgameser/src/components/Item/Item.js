const Item = ({ img, name, price }) => {
    return(
        <div className="container">
            <div className="item">
                <div className="productImg">
                    <img src={img} alt='{name}'/>
                </div>
                <div className="productInfo">
                    <li>
                        {name} 
                    </li>
                    <li>
                        $ {price}
                    </li>
                </div>
            </div>
        </div>
    )
}

export default Item