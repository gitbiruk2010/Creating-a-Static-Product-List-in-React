// import react to define react components
import React from 'react';
// import the styles for the product list
import './styles.css';

// sample array of product objects
const products = [
    { 
      id: 1, 
      name: "Laptop", 
      description: "High-performance gaming laptop starting from.", 
      price: 1199.99,
      image: "/images/laptop.png" // placeholder image url
    },
    { 
      id: 2, 
      name: "Smartphone", 
      description: "Latest model smartphones starting from.", 
      price: 699.99,
      image: "/images/smartphone.png" // placeholder image url
    },
    { 
      id: 3, 
      name: "Printer", 
      description: "Laser printers starting from.", 
      price: 59.99,
      image: "/images/printer.png" // placeholder image url
    },
    //more products...
  ];
  

// productlist component to display a list of products
const ProductList = () => {
    return (
      <div>
        {products.map(product => (
          <div key={product.id} className="product">
            {/* render product image with alt text */}
            <img src={product.image} alt={product.name} className="productImage" />
            {/* render product name */}
            <h2 className="productName">{product.name}</h2>
            {/* render product description */}
            <p className="productDescription">{product.description}</p>
            {/* render product price */}
            <p className="productPrice">${product.price}</p>
          </div>
        ))}
      </div>
    );
  };
  
// export the productlist component for use in other parts of the application
export default ProductList;
