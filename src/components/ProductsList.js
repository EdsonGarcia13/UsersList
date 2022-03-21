import React from "react";

const ProductsList = ({ products, removeProduct, selectProduct }) => {
  return (
    <ul className="list-group">
      {products.map((product) => (
        <li key={product.id}>
          
          <ul className="list-group-item d-flex justify-content-between align-items-center">

            <li className="mb-3">
              <span>{product.first_name}</span> 
            </li>
            <li className="mb-3">
              <span >{product.last_name}</span>
            </li>
            <li className="mb-3">
              <span>{product.email}</span>
            </li>
            <li className="mb-3">
              <span>{product.birthday}</span>
            </li>
            
          
          <small>
          <button onClick={() => removeProduct(product.id)}
           type="button"
          className="btn btn-danger btn-sm">
            Delete
          </button>

          <button onClick={() => selectProduct(product)}
          type="button"
          className="btn btn-warning btn-sm">
          Edit</button>
          </small>
          </ul>
          
        </li>
      ))}
    </ul>
  );
};

export default ProductsList;
