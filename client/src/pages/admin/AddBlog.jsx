import React, { useEffect, useRef, useState } from 'react'
import './AddBlog.css'
import  { assets, blogCategories } from '../../assets/assets'
import Quill from 'quill'
import { useAppContext } from '../../context/AppContext'
import toast from 'react-hot-toast'

const AddBlog = () => {

  const {axios} = useAppContext(); 
  const {isAdding, setIsAdding} = useState(false) 

  const editorRef = useRef(null)
  const quillRef = useRef(null)

  const [image, setImage] = useState(false)
  const [title, setTitle] = useState('')  
  const [subTitle, setSubTitle] = useState('')  
  const [category, setCategory] = useState('Startup')
  const [isPublished, setIsPublished] = useState(false)

  const generateContent = async ()=>{

  }

  const onSubmitHandler = async (e) =>{
    try {
      e.preventDefault();
      setIsAdding(true)

      const blog = {
        title, subTitle, 
        description: quillRef.current.root.innerHTML,
        category, isPublished 
      }

      const formData = new FormData();
      formData.append('blog', JSON.stringify(blog));
      formData.append('image', image);

      const {data} = await axios.await.post('/api/blog/add', formData);
      if(data.success){
        toast.success(data.message);
        setImage(false);
        setTitle('');
        quillRef.current.root.innerHTML = ''
        setCategory('Startup')
      }
      else{
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
    finally{
      setIsAdding(false); 
    }
  }

  useEffect(()=>{
    if(!quillRef.current && editorRef.current){
      quillRef.current = new Quill(editorRef.current, {theme: 'snow'})
    }
  },[])

  return (
    <form className='addblog-form'>
      <div className='form-element-container'>
        <p>Upload thumbnail</p>
        <label htmlFor="Image">
          <img src={ !image ? assets.upload_area: URL.createObjectURL(image)} alt="upload file" className='upload-img' />
          <input onChange={(e)=>setImage(e.target.files[0])} type="file" name="" id="Image" hidden required />
        </label>
        <p className='form-blog-title'>Blog Title</p>
        <input type="text" placeholder='Type here' required className='blog-title-input' onChange={e=>setTitle(e.target.value)} value={title}/>
        <p className='form-blog-title'>Sub Title</p>
        <input type="text" placeholder='Type here' required className='blog-title-input' onChange={e=>setSubTitle(e.target.value)} value={subTitle}/>

        <p className='form-blog-description'>Blog Description</p>
        <div className='blog-description-container'>
          <div ref={editorRef}></div>
          <button type='button' onClick={generateContent} className='generate-content-button'> Generate with AI</button>

        </div>
        <p className='form-blog-description'>Blog Category</p>
        <select name="category" id="" className='select-category' onChange={e=> setCategory(e.target.value)}>
          <option value="">Select Category</option>
          {blogCategories.map((item, index)=>{
            return <option key={index} value={item}>{item}</option>
          })}
        </select>
        <div className='publish-div'>
          <p>Publish Now</p>
          <input type="checkbox" name="" id=""  checked={isPublished} className='publish-checkbox' onChange={e=>setIsPublished(e.target.checked)}/>
        </div>
        <button disabled={isAdding} type="submit" className='final-submit'>
          {isAdding ? 'Adding' : 'Add Blog'}
        </button>
      </div>
    </form> 
  )
}

export default AddBlog 