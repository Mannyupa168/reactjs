const products = [
    { 
        id: '1',
        name: 'TENNIS AIR MAX 90',
        price: 2599.00,
        category: 'sneakers',
        img: 'https://tafmx.vteximg.com.br/arquivos/ids/342205-398-512/DJ9250-001-1.jpg?v=637805059696530000',
        stock: 15,
        description: 'TENNIS AIR MAX 90 | SNEAKERS | MEN´S',
    },
    { 
        id: '2',
        name: 'SNEAKER CARE CREP PROTECT',
        price: 269.00,
        category: 'sneaker-care',
        img: 'https://tafmx.vteximg.com.br/arquivos/ids/227373-398-512/4016109000-001-1.png?v=637417466935800000',
        stock: 10,
        description: 'SNEAKER CARE CREP CREP PROTECT - ERASE | LIMPIADORES | RESURTIBLES',
    },
    { 
        id: '3',
        name: 'PLAYERA ADIDAS DOD TEE',
        price: 699.00,
        category: 'clothes',
        img: 'https://tafmx.vteximg.com.br/arquivos/ids/330442-398-512/HP1922-1.jpg?v=637720705464430000',
        stock: 8,
        description: 'PLAYERA ADIDAS DOD TEE | PLAYERAS | APPAREL',
    }, 
    { 
        id: '4',
        name: 'GORRA PUMA BATMAN BB CAP',
        price: 699.00,
        category: 'accessories',
        img: 'https://tafmx.vteximg.com.br/arquivos/ids/355621-398-512/02389501-1.jpg?v=637842829018930000',
        stock: 12,
        description: 'GORRA PUMA BATMAN BB CAP | GORRAS Y VISERAS | ACCESORIOS',
    }
]

export const getProducts = () => {
    return new Promise((resolve,reject) => {
            setTimeout(() => {
                resolve(products);
            }, 500)
        })
}

export const getProductById = (id) => {
    return new Promise((resolve,reject) => {
            setTimeout(() => {
                resolve(products.find(product => product.id === id));
            }, 500)
        })
}

export const getCategoryByProducts = (categoryId) => {
    return new Promise((resolve,reject) => {
            setTimeout(() => {
                resolve(products.filter(product => product.category === categoryId));
            }, 500)
        })
}