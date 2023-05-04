import React, { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const UpdateAuthor = () => {
  const { id } = useParams();
  const [author, setAuthor] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/author/${id}`)
      .then((res) => {
        setAuthor(res.data.name);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  const onSubmitHandler = (event) => {
    event.preventDefault();
    axios
      .put(`http://localhost:8000/api/author/${id}`, { name: author })
      .then((res) => {
        setAuthor(res.data.name);
        navigate('/');
      })
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <h1>Update Author</h1>
      <form onSubmit={onSubmitHandler}>
        <div>
          <label>Name:</label>
          <input
            type='text'
            name='name'
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
          <Link to='/'>
            <button>Cancel</button>
          </Link>
          <button type='submit'>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default UpdateAuthor;
