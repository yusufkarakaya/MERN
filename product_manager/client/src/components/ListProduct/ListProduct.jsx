import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ListProduct.css';
import axios from 'axios';

const ListProduct = (props) => {
  const { removeFromDom, product, setProduct } = props;

  const deleteProduct = (productId) => {
    axios
      .delete('http://localhost:8000/api/product/' + productId)
      .then((res) => {
        removeFromDom(productId);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    axios
      .get('http://localhost:8000/api/product')
      .then((res) => {
        console.log(res.data);
        setProduct(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className='main'>
      <h1>All Products</h1>
      {product.map((product, index) => {
        return (
          <div key={index}>
            <p>
              <Link to={`/api/product/${product._id}`}>{product.title}</Link>
              {' | '}
              <Link to={`/api/update/${product._id}`}> Edit</Link>
              {' | '}
              <button onClick={(e) => deleteProduct(product._id)}>
                {' '}
                Delete
              </button>
            </p>
            <hr />
          </div>
        );
      })}
    </div>
  );
};

export default ListProduct;
