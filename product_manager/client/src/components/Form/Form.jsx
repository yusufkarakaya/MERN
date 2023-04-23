import React from 'react';
import './Form.css';
const Form = () => {
  return (
    <div className='main'>
      <h1>Product Manager</h1>
      <form className='form' action=''>
        <div className='form-group'>
          <label htmlFor='title'>Title:</label>
          <input type='text' name='title' />
        </div>
        <div className='form-group'>
          <label htmlFor='price'>Price:</label>
          <input type='text' name='price' />
        </div>
        <div className='form-group'>
          <label htmlFor='description'>Description:</label>
          <input type='text' name='description' />
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

export default Form;
