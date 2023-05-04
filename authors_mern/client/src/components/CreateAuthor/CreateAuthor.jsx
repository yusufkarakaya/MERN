import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreateAuthor = () => {
  const [name, setName] = useState([]);
  const navigate = useNavigate();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:8000/api/author', name)
      .then((res) => {
        setName(res.data);
        navigate('/');
      })
      .catch((err) => console.error(err));
  };

  const onInputChange = (e) => {
    setName({ ...name, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h1>Favorite Authors</h1>
      <Link to='/'>Home</Link>
      <p>Add a new author</p>
      <form>
        <div>
          <label>Name:</label>
          <input type='text' name='name' onChange={onInputChange} />
          <Link to='/'>
            <button>Cancel</button>
          </Link>

          <button onClick={onSubmitHandler}>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default CreateAuthor;
