import { useState } from 'react'

const Counter = ({initial = 0, stock, onAdd}) => {

    const [count, setCount] = useState(initial)
    // const [result, setResult] = useState(0)

    const decrement = () => {
        if(count > 0) setCount(count - 1)
    }

    const increment = () => {
        if (count < stock) setCount(count + 1)
    }

    return(
        <div>
            {/* <h1>{result}</h1> */}
            <button onClick={decrement}>-</button>
            <h2>{count}</h2>
            <button onClick={increment}>+</button>
            <button onClick={() => onAdd(count)}>Add to cart</button>
        </div>
    )
}

export default Counter