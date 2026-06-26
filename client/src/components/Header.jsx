import React, { useRef } from 'react'
import './Header.css'
import { assets } from '../assets/assets'
import { useAppContext } from '../context/AppContext'

const Header = () => {

  const {setInput, input} = useAppContext();
  const inputRef = useRef();

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setInput(inputRef.current.value)
  }

  const onClear = () =>{
    setInput('');
    inputRef.current.value = ''
  }

  return (
    <div className='hero-section'> 
    <div className='hero-subsection'>
      <div className='hero-aifeature'>
      <p>New: AI feature integrated</p>
      <img src={assets.star_icon} alt="" className='star-icon' />
      </div>
      <h1 className='hero-heading'>
        Your own <span>blogging</span> <br/> platform.
      </h1>
      <p className='hero-para'>This is your space to think out loud, to share what matters, and to write without filters. Whether it's one word or a thousand, your story starts right here.</p>
      <form onSubmit={onSubmitHandler} className='hero-form'>
        <input ref={inputRef} type="text"  placeholder='Search for Blogs' required className='search-bar'/>
        <button className='search-button'>Search</button>
      </form>
    </div>
    <div className='clear-search-div'>
      {input && <button onClick={onClear} className='clear-search-button'>Clear Search</button>}
    </div>
      <img src={assets.gradientBackground} alt="" className='hero-background' />
    </div>
  )
}

export default Header
