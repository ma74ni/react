import React from 'react';

import Product from './Product';

class ProductList extends React.Component{
    render() {
        let products = [
            {
                code: "p01",
                name: "Traditional Merlot",
                description: "Descripción Tradicional Merlot"
            },
            {
                code: "p02",
                name: "Classic Chiantti",
                description: "Descripción Classic Chiantti"
            },
            {
                code: "p03",
                name: "Nuevo 03",
                description: "Descripción Nuevo 03"
            }
        ];
        let productComponents = [];
        for(let product of products) {
            productComponents.push(<Product product = { product }/>); // PROPS
        }
    return <ul> { productComponents } </ul>
    }
}
export default ProductList;