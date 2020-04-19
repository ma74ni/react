import React from 'react';

import './ProductList.css';

import Product from './Product';

class ProductList extends React.Component{
    // Una buena práctica es definir a los componentes de estado al superior en la jerarquía de componentes, en este caso a Catalog.js
    render() {
        let products = [];

        for(let product of this.props.products) { // Usamos la propagación desde catalog.js
            products.push(<Product product = { product }/>); // PROPS
        }
    return <ul> { products } </ul>
    }
}
export default ProductList;