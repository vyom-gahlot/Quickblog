import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { useParams } from 'react-router-dom'
import { assets, blog_data, comments_data, } from '../assets/assets';
import './Blog.css'
import Moment from 'moment'
import Footer from '../components/Footer';
import Loader from '../components/Loader';
import { useAppContext } from '../context/AppContext';
import toast from 'react-hot-toast';


const Blog = () => {
  const{id} = useParams();

  const {axios} = useAppContext();

  const [data, setData] = useState(null)
  const [comments, setComments] = useState([])
  const [name, setName] = useState('')
  const [content, setContent] = useState('')

  const fetchBlogData = async () => {
    try {
      const { data } = await axios.get(`/api/blog/${id}`);
      data.success ? setData(data.blog) : toast.error(data.message);
    } catch (error) {
      toast.error(error.message);
    }
  }

  const fetchComments = async () => {
    try {
      const { data } = await axios.post('/api/blog/comments', {blogId});
      if (data.success) {
        setComments(data.comments);
      }
      else{
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  }

  const addComment = async (e)=>{
    e.preventDefault();
    try {
      const { data } = await axios.post('/api/blog/add-comment', {blog: id, name, content});
      if (data.success) {
        toast.success(data.message);
        setName('');
        setContent('');
      }
      else{
        toast.error(error.message)
      }
    } catch (error) {
      toast.error(error.message);
    }
  } 

  useEffect(()=>{
    fetchBlogData()
    fetchComments()
    addComment()
  },[])
  return data ? (
    <div className='blog-div'>
      <img src={assets.gradientBackground} className='blog-bg' />
      <Navbar/>
      <div className='blog-header'>
        
        <p className='date'>published on {Moment(data.createdAt).format('MMMM Do YYYY')}</p>
        <h1 className='blog-title'>{data.title}</h1>
        <h2 className='blog-subtitle'>{data.subTitle}</h2>
        <p className='author'>Vyom</p>
      </div>

      <div className='blog-main'>
        <img src={data.image} alt=""  className='blog-image'/>

        <div className='blog-text' dangerouslySetInnerHTML={{__html: data.description}}></div>

      </div>
      <div className='blog-comments'>
        <p>Comments ({comments.length})</p>
        <div className='blog-listcomments'>
          {comments.map((item, index)=>(
            <div key={index} className='blog-listitem'>
              <div className='user-info'> 
                <img src={assets.user_icon} alt="user icon" className='usericon' />
                <p className='username'>{item.name}</p>
              </div>
              <p>{item.content}</p>
              <div className='comment-time'>{Moment(item.createdAt).fromNow()}</div>
            </div>          
          ))}
        </div>
      </div>
      <div className='comment-input'>
        <p className='input-head'>Add your comment</p>

        <form onSubmit={addComment} className='comment-form'>
          <input onChange={(e)=>setName(e.target.value) } value={name} type="text" placeholder='Name' required className='input-name' />
          <textarea onChange={(e)=>setContent(e.target.value)} value={content} placeholder='Comment' className='input-text'></textarea>
          <button onClick={addComment()} className='comment-submit' type='submit'> Submit</button>
        </form>
      </div>
      
      <Footer/>
    </div>
  ) : <div><Loader/></div>
}

export default Blog
