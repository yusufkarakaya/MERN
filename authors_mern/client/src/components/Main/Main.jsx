import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import ListAuthors from '../ListAuthors/ListAuthors';

const Main = () => {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:8000/api/author')
      .then((res) => setAuthors(res.data))
      .catch((err) => console.error(err));
  }, []);

  const removeFromDOM = (id) => {
    setAuthors(authors.filter((author) => author._id !== id));
  };

  return (
    <div className='App'>
      <h1>Favorite Authors</h1>
      <Link to='/new'>Add an author</Link>
      <h3>We have quotes by:</h3>

      <ListAuthors
        authors={authors}
        setAuthors={setAuthors}
        removeFromDOM={removeFromDOM}
      />
    </div>
  );
};

export default Main;
