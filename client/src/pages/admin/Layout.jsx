import React from 'react'
import './Layout.css'
import { Outlet} from 'react-router-dom'
import { assets } from '../../assets/assets';
import Sidebar from '../../components/admin/Sidebar';
import { useAppContext } from '../../context/AppContext';


const Layout = () => {

  const{axios, setToken, navigate} = useAppContext();

    const logout = ()=>{
      localStorage.removeItem('token');
      delete axios.defaults.headers.common['Authorization'];
      setToken(null);
        navigate('/')
    }

  return (
    <>
    <div className='admin-navbar'>
      <img src={assets.logo} alt="logo" className='layout-logo' onClick={()=>navigate('/')} />
      <button onClick={logout} className='logout-button'>Logout</button> 
    </div>
    <div className='sidebar-container'>
        <Sidebar/>
        <Outlet/>
    </div>  
    </>
  )
}

export default Layout
