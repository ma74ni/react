import React from 'react';

import Product from './Product';

class ProductList extends React.Component{
    constructor() {
        super();
        this.state = { products : [] }; // Estado inicial
        fetch("products.json") // Se envía un GET HTTP REQUEST
        .then(response => response.json()) // Recibe la restpuesta
        .then(json => {this.setState({ products: json })}) // Cambia el estado
        .catch(error => console.log(error));
    }
    render() {
        let productComponents = [];
        for(let product of this.state.products) { // Se detecta el cambio y se hace render en la vista
            productComponents.push(<Product product = { product }/>); // PROPS
        }
    return <ul> { productComponents } </ul>
    }
}
export default ProductList;