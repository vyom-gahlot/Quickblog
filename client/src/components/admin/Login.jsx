import React, { useState } from 'react'
import './Login.css'
import { useAppContext } from '../../context/AppContext';
import toast from 'react-hot-toast';

const Login = () => {

  const{axios, setToken} = useAppContext();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) =>{
    e.preventDefault()
    try {
      const {data} = await axios.post('/api/admin/login', {email, password})

      if (data.success) {
        setToken(data.token);
        localStorage.setItem('token', data.token);
        axios.defaults.headers.common['Authorization'] = `Bearer ${data.token}`;
      }
      else{
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  return (
    <div className='login-container'>
      <div className='name-card'>
        <div className='name-content'>
          <div className='login-text'>
            <h1 className='login-heading'><span className='admin-span'>Admin</span> Login</h1>
            <p className='login-subheading'>Enter your credentials to access the admin panel</p>
          </div>
          <form onSubmit={handleSubmit} className='login-form'>
            <div className='login-formdiv'>
              <label> Email</label>
              <input onChange={e=>setEmail(e.target.value)} value={email}
               type="email" required placeholder='your email id' className='login-input' />
            </div>
            <div className='login-formdiv'>
              <label> Password</label>
              <input onChange={e=>setPassword(e.target.value)} value={password} 
              type="password" required placeholder='your password' className='login-input' />
            </div>
            <button type="submit" className='admin-login-button'>Login</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
