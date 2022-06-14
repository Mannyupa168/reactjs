const Item = ({ img, name, price, }) => {
    return(
            <li>
                <img src={img} alt='{name}'/>
                {name} 
            </li>
    )
}

export default Item