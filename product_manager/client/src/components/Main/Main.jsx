import React, { useState } from 'react';
import Form from '../Form/Form';
import ListProduct from '../ListProduct/ListProduct';
import DetailProduct from '../DetailProduct/DetailProduct';

const Main = (props) => {
  const [product, setProduct] = useState([]);
  const removeFromDom = (productId) => {
    setProduct(product.filter((product) => product._id != productId));
  };
  return (
    <div>
      <Form product={product} setProduct={setProduct} />
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
