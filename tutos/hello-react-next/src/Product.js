import React from 'react';

import './Product.css';

class Product extends React.Component {

    showPrice() {
        alert(this.props.product.code);
    }
    
    render() { // PROPS vienen desde ProductList
        let classToApply = this.props.product.selected ? "selected" : ""; // si tiene la propiedad selected cambia la clase

        // Llamamos al método Select() q pasa a través de this.props.selectHandler con el código del producto respectivo
        return <li onClick={ () => this.props.selectHandler(this.props.product.code) } className={ classToApply }>
            <h3>{ this.props.product.name }</h3>
            <p>{ this.props.product.description }</p>
        </li>;
    }
}
export default Product