import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import Form from '../Form/Form';

const Update = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [loaded, setLoaded] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/product/${id}`)
      .then((res) => {
        console.log(res.data);
        setProduct(res.data);
        setLoaded(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  const updateProduct = (personParam) => {
    axios
      .put('http://localhost:8000/api/product/' + id, personParam)
      .then((res) => console.log(res));
    navigate('/api');
  };

  return (
    <div>
      <h1>Update a Person</h1>
      {loaded && (
        <Form
          onSubmitProp={updateProduct}
          initialTitle={product.title}
          initialPrice={product.price}
          initialDescription={product.description}
        />
      )}
    </div>
  );
};

export default Update;
