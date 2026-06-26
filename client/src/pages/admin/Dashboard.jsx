import React, { useEffect, useState } from 'react'
import './Dashboard.css'
import { assets, dashboard_data } from  '../../assets/assets'
import BlogTableItem from '../../components/admin/BlogTableItem'
import { useAppContext } from '../../context/AppContext'
import toast from 'react-hot-toast'

const Dashboard = () => {

  const [dashboardData, setDashboardData] = useState({
    blogs: 0,
    comments: 0,
    drafts: 0,
    recentBlogs: []
  })

  const {axios} = useAppContext();
    const fetchDashboard = async ()=>{
      try {
        const{data} = await axios.get('/api/admin/dashboard');
        data.success ? setDashboardData(data.dashboardData) : toast.error(data.message);
      } catch (error) {
        toast.error(error.message);
      }
    }

    useEffect(()=>{
      fetchDashboard();
    }, [])
  return (
    <div className='dashboard-container'>

      <div className='dashboard-cards'> 
        <div className='dashboard-card-box'> 
          <img src= {assets.dashboard_icon_1} alt="" />
        <div>
          <p className='dashboard-card-data'>{dashboardData.blogs}</p>
          <p className='dashboard-card-para'>Blogs</p>
        </div>  
      </div>

      <div className='dashboard-card-box'> 
          <img src= {assets.dashboard_icon_2} alt="" />
        <div>
          <p className='dashboard-card-data'>{dashboardData.comments}</p>
          <p className='dashboard-card-para'>Comments</p>
        </div>  
      </div>

      <div className='dashboard-card-box'> 
          <img src= {assets.dashboard_icon_3} alt="" />
        <div>
          <p className='dashboard-card-data'>{dashboardData.drafts}</p>
          <p className='dashboard-card-para'>Drafts</p>
        </div>  
      </div>

      </div>

      <div>
        <div className='dashboard-heading'>
          <img src={assets.dashboard_icon_4} alt="" />
          <p>Latest Blogs</p>
        </div>

        <div className='dashboard-table-div'>
          
          <table className='dashboard-table'> 
            <thead className='dashboard-table-heading'>
              <tr>
                <th scope='col' className='dashboard-table-heading-element'>#</th>
                <th scope='col' className='dashboard-table-heading-element'>BLOG TITLE</th>
                <th scope='col' className='dashboard-table-heading-element'>DATE</th>
                <th scope='col' className='dashboard-table-heading-element'>STATUS</th>
                <th scope='col' className='dashboard-table-heading-element'>ACTION</th>
              </tr>
            </thead> 
            <tbody>
              {dashboardData.recentBlogs.map((blog, index)=>{
                return <BlogTableItem key={blog._id} blog={blog}
                fetchBlogs={fetchDashboard} index={index+1}/>
              })}
            </tbody>
          </table>

        </div>
      </div>
      
    </div>
  )
}

export default Dashboard
