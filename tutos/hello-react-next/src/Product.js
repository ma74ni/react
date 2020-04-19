import React from 'react';

class Product extends React.Component {
    render() { // PROPS vienen desde ProductList
        return <li>
            <h3>{ this.props.product.name }</h3>
            <p>{ this.props.product.description }</p>
        </li>;
    }
}
export default Product