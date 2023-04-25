import React, { useState } from 'react';
import './Form.css';
import axios from 'axios';

const Form = (props) => {
  const { product, setProduct } = props;
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');

  const onSubmitHandler = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:8000/api/product', {
        title: title,
        price: price,
        description: description,
      })
      .then((res) => {
        console.log(res.data);
        setProduct([...product, res.data]);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className='main'>
      <h1>Product Manager</h1>
      <form className='form' action='post'>
        <div className='form-group'>
          <label htmlFor='title'>Title:</label>
          <input
            type='text'
            name='title'
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='price'>Price:</label>
          <input
            type='text'
            name='price'
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='description'>Description:</label>
          <input
            type='text'
            name='description'
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className='form-group'>
          <button
            onClick={onSubmitHandler}
            className='submit-button'
            type='submit'
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
