import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const DetailProduct = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/product/${id}`)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
    <div>
      <h3>Product Details</h3>
      <hr />
      <p>Title: {product.title}</p>
      <p>Price: {product.price}</p>
      <p>Description: {product.description}</p>
    </div>
  );
};

export default DetailProduct;
