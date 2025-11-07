import React, {useState} from 'react';
import api from '../../api/axios';
import { useNavigate } from 'react-router-dom';

export default function Register(){
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [role,setRole] = useState('customer');
  const nav = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post('/auth/register', { name, email, password, role });
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('user', JSON.stringify(res.data.user));
      nav('/');
    } catch (err) {
      alert(err.response?.data?.message || 'Error');
    }
  };

  return (
    <form onSubmit={submit} style={{padding:20}}>
      <h2>Register</h2>
      <input placeholder="Name" value={name} onChange={e=>setName(e.target.value)} /><br />
      <input placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} /><br />
      <input placeholder="Password" type="password" value={password} onChange={e=>setPassword(e.target.value)} /><br />
      <select value={role} onChange={e=>setRole(e.target.value)}>
        <option value="customer">Customer</option>
        <option value="vendor">Vendor</option>
      </select><br />
      <button>Register</button>
    </form>
  );
}
