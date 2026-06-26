import React, { useEffect, useState } from 'react'
import { blog_data } from '../../assets/assets'
import './ListBlog.css'
import BlogTableItem from '../../components/admin/BlogTableItem'
import { useAppContext } from '../../context/AppContext'
import toast from 'react-hot-toast'

const ListBlog = () => {

  const [blogs, setBlogs] = useState([]);
  const {axios} = useAppContext();
  
  const fetchBlogs = async ()=>{
    try {
        const {data} =  await axios.get('/api/admin/blogs')
        if(data.success){
          setBlogs(data.blogs);
        }
        else{
          toast.error(data.message);
        }
    } catch (error) {
      toast.error(error.message);
    }
  }

  useEffect(()=>{
    fetchBlogs();
  }, [])

  return (
    <div className='bloglist-container'>
      <h1 className='bloglist-heading'>All Blogs</h1>
      <div className='bloglist-table-div'>
          
          <table className='bloglist-table'> 
            <thead className='bloglist-table-heading'>
              <tr>
                <th scope='col' className='bloglist-table-heading-element'>#</th>
                <th scope='col' className='bloglist-table-heading-element'>BLOG TITLE</th>
                <th scope='col' className='bloglist-table-heading-element'>DATE</th>
                <th scope='col' className='bloglist-table-heading-element'>STATUS</th>
                <th scope='col' className='bloglist-table-heading-element'>ACTION</th>
              </tr>
            </thead> 
            <tbody>
              {blogs.map((blog, index)=>{
                return <BlogTableItem key={blog._id} blog={blog}
                fetchBlogs={fetchBlogs} index={index+1}/>
              })}
            </tbody>
          </table>

        </div>
    </div>
  )
}

export default ListBlog
