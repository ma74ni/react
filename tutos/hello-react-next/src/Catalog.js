import React from 'react';
import './Catalog.css';

class Catalog extends React.Component {
	render () {
		//let output = <div><h2>Catalog</h2></div>;//Asignando una expresión JSX a una variable
		//return output;
		//------------------------------------------------
		//let title = 'Catalog';//Usando una expresión js dentro de jsx
		//return <div><h2>{title}</h2></div>;
		//------------------------------------------------
		// let title = "The catalog  of today " + new Date().toDateString();//Usando una expresión un poco más compleja de js dentro de jsx
		// return <div><h2>{title}</h2></div>;
		//------------------------------------------------
		//Rendering Condicional
		let message;
		let today = new Date().getDate();

		if (today == 0) {
			message = <div className="sorry"><h2>We are closed on Sunday.</h2></div>;
		} else {
			message = <div className="happy"><h2>How can we help you?</h2></div>;
		}

		return message;
	}
}

export default Catalog;