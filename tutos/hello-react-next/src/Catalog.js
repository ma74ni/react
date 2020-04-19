import React from 'react';
import './Catalog.css';
import ProductList from './ProductList';

class Catalog extends React.Component {
	constructor() {
        super();
		this.state = { products : [] }; 
		
        fetch("products.json")
        	.then(response => response.json())
        	.then(json => {this.setState({ products: json })})
        	.catch(error => console.log(error));
    }
	render () {  // Cambiando el estado
		return <div>
			<h2>Catálogo de Vinos</h2>
			<ProductList products = { this.state.products }/>
		</div>;
	}
}

export default Catalog;