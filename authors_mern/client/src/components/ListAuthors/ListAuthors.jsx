import React, { useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ListAuthors = (props) => {
  const { authors, setAuthors, removeFromDOM } = props;

  const deleteAuthor = (authorId) => {
    axios
      .delete('http://localhost:8000/api/author/' + authorId)
      .then((res) => {
        removeFromDOM(authorId);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    axios
      .get('http://localhost:8000/api/author')
      .then((res) => setAuthors(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Author</th>
            <th>Actions Available</th>
          </tr>
        </thead>
        <tbody>
          {authors.map((author, idx) => {
            return (
              <tr key={idx}>
                <td>{author.name}</td>
                <td>
                  <Link to={'/edit/' + author._id}>
                    <button>Edit</button>{' '}
                  </Link>
                  <button onClick={(e) => deleteAuthor(author._id)}>
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ListAuthors;
