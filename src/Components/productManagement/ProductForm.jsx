import React, { useState } from "react";

const ProductForm = ({ handleAddProduct }) => {
  const [error, setError] = useState("");

  const handleProductSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const price = parseFloat(e.target.price.value);
    const quantity = parseInt(e.target.quantity.value);

    if (name.length === 0) {
        setError('Mention a product name')
        return
    }
    else if(isNaN(price)){
        setError('Mention the price.')
        return
    }
    
    else if(price < 0){
        setError('Price cannot be negative.')
        return
    }
    else if(isNaN(quantity)){
        setError('Enter quantity')
        return
    }
    else if(quantity < 0){
        setError('Quantity cannot be negative.')
        return
    }
    setError('');
    // console.log(name, price, quantity);

    const newProduct = {
      name,
      price,
      quantity,
    };

    // console.log(newProduct);
    handleAddProduct(newProduct);
    e.target.reset()
  };

  return (
    <div>
      <h3>Add a Product</h3>
      <form onSubmit={handleProductSubmit}>
        <input type="text" name="name" placeholder="Product Name" />
        <br />
        <input type="number" name="price" placeholder="Product Price" />
        <br />
        <input type="number" name="quantity" placeholder="Product Quantity" />
        <br />

        <input type="submit" value="Submit" />
      </form>
      <p style={{color:'red'}}><small>{error}</small></p>
    </div>
  );
};

export default ProductForm;
