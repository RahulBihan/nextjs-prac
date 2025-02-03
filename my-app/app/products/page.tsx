import React from 'react';
import Link from "next/link";

const ProductList: React.FC = () => {
    const products = [
        { id: 1, name: 'Product 1', price: '$10' },
        { id: 2, name: 'Product 2', price: '$20' },
        { id: 3, name: 'Product 3', price: '$30' },
    ];

    return (
        <div>
            <Link href="/">Home</Link>
            <h1>Product List</h1>
            <ul>
                {products.map(product => (
                    <li key={product.id}>
                        <Link href={`/products/${product.id}`}> {product.name} - {product.price}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

 export default ProductList;