const products = [
    { 
        id: '1',
        name: 'TENNIS AIR MAX 90',
        price: 2599,
        category: 'SNEAKERS MEN',
        img: 'https://tafmx.vteximg.com.br/arquivos/ids/342205-398-512/DJ9250-001-1.jpg?v=637805059696530000',
        stock: 15,
        description: 'Nada como volar, nada tan cómodo, nada tan probado: el Nike Air Max 90 se mantiene fiel a sus raíces con la icónica suela Waffle, las superposiciones cosidas y los detalles clásicos de TPU.',
    },
    { 
        id: '2',
        name: 'TENNIS ADIDAS SUPERSTAR PRIDE',
        price: 2999,
        category: 'SNEAKERS MEN',
        img: 'https://tafmx.vteximg.com.br/arquivos/ids/367433-398-512/GX6395-1.jpg?v=637897779579800000',
        stock: 10,
        description: 'ADIDAS SUPERSTAR PRIDE | SNEAKERS | UNISEX',
    },
    { 
        id: '3',
        name: 'TENNIS ADIDAS GRAND COURT ALPHA',
        price: 1699,
        category: 'SNEAKERS MEN',
        img: 'https://tafmx.vteximg.com.br/arquivos/ids/350531-398-512/GY8029-1.jpg?v=637840857219330000',
        stock: 8,
        description: 'TENNIS ADIDAS GRAND COURT ALPHA | SNEAKERS | MEN´S',
    }
]

export const getProducts = () => {
    return new Promise((resolve,reject) => {
            setTimeout(() => {
                resolve(products);
        },2000)
    })
}