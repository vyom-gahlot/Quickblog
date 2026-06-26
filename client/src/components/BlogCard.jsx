import React from 'react'
import './BlogCard.css'
import { useNavigate } from 'react-router-dom';

const BlogCard = ({blog}) => {
    const navigate = useNavigate();
    const {title, description, category, image, _id} = blog;
  return (
    <div onClick={()=> navigate(`/blog/${_id}`)} className='Card'>
      <img src={image} alt="" className='Blogcard-img'/>
      <span className='Blogcard-category'>{category}</span>
      <div className='Blogcard-text'>
        <h5 className='Blogcard-title'>{title}</h5>
        <p className='Blogcard-description'>
  {description.replace(/<[^>]+>/g, '').slice(0, 80)}...
</p>
      </div>
    </div>
  )
}

export default BlogCard
