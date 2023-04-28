import React, { useState } from 'react';
import './Form.css';

const Form = (props) => {
  const { onSubmitProp, initialTitle, initialPrice, initialDescription } =
    props;
  const [product, setProduct] = useState({
    title: initialTitle,
    price: initialPrice,
    description: initialDescription,
  });

  const onSubmitHandler = (e) => {
    e.preventDefault();
    onSubmitProp({
      title: product.title,
      price: product.price,
      description: product.description,
    });
  };

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
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
            value={product.title}
            onChange={onInputChange}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='price'>Price:</label>
          <input
            type='text'
            name='price'
            value={product.price}
            onChange={onInputChange}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='description'>Description:</label>
          <input
            type='text'
            name='description'
            value={product.description}
            onChange={onInputChange}
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
