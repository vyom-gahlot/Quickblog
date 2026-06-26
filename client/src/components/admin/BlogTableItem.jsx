import React from 'react'
import './BlogTableItem.css'
import { assets } from '../../assets/assets';
import { useAppContext } from '../../context/AppContext';
import toast from 'react-hot-toast';


const BlogTableItem = ({blog, fetchBlogs, index}) => {

    const { title, createdAt } = blog;
    const BlogDate = new Date(createdAt);

    const {axios} = useAppContext;

    const deleteBlog = async () => {
        const confirm = window.confirm('Are you sure you want to delete this blog');
        if(!confirm) return;
        try {
            const {data} = await axios.post('/api/blog/delete', {id: blog_id})
            if(data.success){
                toast.success(data.message);
                await fetchBlogs();
            }
            else{
                toast.error(data.message);
            }
        } catch (error) {
            toast.error(error.message);
        }
    }

    const togglePublish = async() =>{
        try {
            const {data} = await axios.post('/api/blog/toggle-publish', {id: blog_id});
        if(data.success){
                toast.success(data.message);
                await fetchBlogs();
            }
            else{
                toast.error(data.message);
            }
        } catch (error) {
            toast.error(error.message);
        }
    }

  return (
    
      <tr className='table-row-item'>
        <th className='table-element'>{index}</th>
        <td className='table-element'>{title}</td>
        <td className='table-element'>{BlogDate.toDateString()}</td>
        <td className='table-element'>
            <p className={`${blog.isPublished ? "blog-published" : "blog-unpublished"}`}>
                {blog.isPublished ? 'Published' : 'Unpublished'}
            </p>
        </td>
        <td className='table-element table-element-button'>
            <button onClick={togglePublish} className='table-button'>{blog.isPublished ? 'Unpublish' : 'Publish'}</button>
            <img src={assets.cross_icon} alt="" className='cross-icon' onClick={deleteBlog} />
        </td>
      </tr>
    
  )
}

export default BlogTableItem
