import React, {useEffect,useState} from 'react';
import { useParams } from 'react-router-dom';
import api from '../api/axios';

export default function Product(){
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  useEffect(()=> {
    api.get(`/products/${id}`).then(res => setProduct(res.data)).catch(console.error);
  },[id]);

  if(!product) return <div>Loading...</div>;
  return (
    <div style={{padding:20}}>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>Price: {product.price}</p>
      <button>Add to cart (not implemented)</button>
    </div>
  );
}
