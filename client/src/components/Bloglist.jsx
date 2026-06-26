import React, { useState } from 'react'
import './Bloglist.css'
import { blog_data, blogCategories } from '../assets/assets'
import { motion } from 'motion/react'
import BlogCard from './BlogCard'
import { useAppContext } from '../context/AppContext'

const Bloglist = () => {

    const [menu, setMenu] = useState('All')
    const {blogs, input} = useAppContext();

    const filteredBlogs = ()=>{
        if (input === '') {
            return blogs
        }
        return blogs.filter((blog)=> blog.title.toLowerCase().includes(input.toLowerCase()) || blog.category.toLowerCase().includes(input.toLowerCase()))
    }

  return (
    <div>
        <div className='categories'>
            {blogCategories.map((item)=>(
                <div key={item} className='category-item'>
                    <button onClick={()=>setMenu(item)} className={`category-button ${menu === item && `selected-category`}`} >
                        {item}
                        {menu === item && (<motion.div layoutId='underline' 
                        transition={{type: 'spring', stiffness:500, damping:30}} 
                        className='button-div'>
                        </motion.div>)} 
                    </button>
                </div>
            ))}
        </div>
        <div className='Blogcards'>
            {filteredBlogs().filter((blog)=> menu==='All'? true :blog.category === menu).map((blog)=><BlogCard key={blog._id} blog={blog}/>)}
        </div>
      
    </div>
  ); 
}

export default Bloglist
