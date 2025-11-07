import React, {useEffect, useState} from 'react';
import api from '../api/axios';
import { Link } from 'react-router-dom';

export default function Home(){
  const [products, setProducts] = useState([]);
  useEffect(() => {
    api.get('/products').then(res => setProducts(res.data)).catch(console.error);
  }, []);
  return (
    <div style={{padding:20}}>
      <h1>Store</h1>
      <div>
        {products.map(p => (
          <div key={p._id} style={{border:'1px solid #ddd', padding:10, margin:10}}>
            <h3>{p.name}</h3>
            <p>Price: {p.price}</p>
            <Link to={`/product/${p._id}`}>View</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
