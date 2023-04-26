import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const Update = (props) => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const navigate = useNavigate();

  const updateProduct = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:8000/api/product/${id}`, product)
      .then((res) => {
        console.log(res.data);
        navigate('/api');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/product/${id}`)
      .then((res) => {
        console.log(res.data);
        setProduct(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({ ...prevProduct, [name]: value }));
  };

  return (
    <div>
      <h3>Update Product</h3>
      <hr />
      <form onSubmit={updateProduct} action='post'>
        <div className='form-group'>
          <label htmlFor='title'>Title:</label>
          <input
            value={product.title}
            type='text'
            name='title'
            onChange={handleInputChange}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='price'>Price:</label>
          <input
            value={product.price}
            type='text'
            name='price'
            onChange={handleInputChange}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='description'>Description:</label>
          <input
            value={product.description}
            type='text'
            name='description'
            onChange={handleInputChange}
          />
        </div>
        <div className='form-group'>
          <button className='submit-button' type='submit'>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Update;
