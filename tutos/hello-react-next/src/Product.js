import React from 'react';

class Product extends React.Component {
    showPrice() { // Método para mostrar el precio del producto
        alert(this.props.product.price);
    }

    render() { // PROPS vienen desde ProductList
        return <li onClick={ () => this.showPrice() }>
            <h3>{ this.props.product.name }</h3>
            <p>{ this.props.product.description }</p>
        </li>;
    }
}
export default Product