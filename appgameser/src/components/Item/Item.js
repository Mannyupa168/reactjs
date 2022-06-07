const Item = ({img, name, price, }) => {
    return(
        <div>
            <li>
                <img src={img} alt=''/>
                {name} 
            </li>
            <li> {price} </li>
        </div>
    )
}

export default Item