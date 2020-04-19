import React from 'react';
import './Catalog.css';
import ProductList from './ProductList';

class Catalog extends React.Component {
	constructor() {
        super();
		this.state = { products : [] };
		this.select = this.select.bind(this);
		
        fetch("products.json")
        	.then(response => response.json())
        	.then(json => {this.setState({ products: json })})
        	.catch(error => console.log(error));
	}
	select(productCode) {
		let productList = this.state.products.map(
			(p) => {
				if(p.code === productCode) {
					// Utilizando el operador de propagación, se toma cada elemento del objeto p para procesar cómo argumentos semparado
					const p_copy = {...p} // Hace una copia de pa para evitar mutar el estado directamente
					p_copy.selected = !p.selected;
					return p_copy;
				}
				return p;
			});
		this.setState({ products: productList });
	}
	// Cambiando el estado
	// El método Select() es asignado al atributo selectHandler para q pueda acceder desde el componente hijo Product.js
	render () {
		return <div>
			<h2>Catálogo de Vinos</h2>
			{<ProductList products = { this.state.products } selectHandler={ this.select }/> }
		</div>;
	}
}

export default Catalog;