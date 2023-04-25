import React, { useState } from 'react';
import Form from '../Form/Form';
import ListProduct from '../ListProduct/ListProduct';

const Main = () => {
  const [product, setProduct] = useState([]);

  return (
    <div>
      <Form product={product} setProduct={setProduct} />
      <hr style={{ marginTop: '30px' }} />
      <ListProduct product={product} setProduct={setProduct} />
    </div>
  );
};

export default Main;
