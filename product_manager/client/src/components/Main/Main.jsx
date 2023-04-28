import React, { useEffect, useState } from 'react';
import Form from '../Form/Form';
import ListProduct from '../ListProduct/ListProduct';
import axios from 'axios';

const Main = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:8000/api/product')
      .then((res) => {
        console.log(res.data);
        setProduct(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const removeFromDom = (productId) => {
    setProduct(product.filter((product) => product._id !== productId));
  };

  const createProduct = (personParam) => {
    axios.post('http://localhost:8000/api/product', personParam).then((res) => {
      console.log(res.data);
      setProduct([...product, res.data]);
    });
  };

  return (
    <div>
      <Form
        onSubmitProp={createProduct}
        initialTitle=''
        initialPrice=''
        initialDescription=''
      />
      <hr style={{ marginTop: '30px' }} />
      <ListProduct
        product={product}
        setProduct={setProduct}
        removeFromDom={removeFromDom}
      />
      <hr style={{ marginTop: '30px' }} />
    </div>
  );
};

export default Main;
