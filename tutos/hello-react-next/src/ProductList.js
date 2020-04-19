import React from 'react';

class ProductList extends React.Component{
    render() {
        // Correct! This use of <ul> is legitimate because div is a valid HTML tag:
        return <ul>
            <li>
                <h3>Traditional Merlot</h3>
                <p>Descripción del producto1</p>
            </li>
            <li>
                <h3>Classic Chiantti</h3>
                <p>Descripción del produto2</p>
            </li>
        </ul>;
    }
}
export default ProductList;