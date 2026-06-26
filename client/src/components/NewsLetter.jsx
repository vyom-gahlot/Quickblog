import React from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
  return (
    <div className='newsletter-div'>
        <h1 className='newsletter-head'>Never Miss a Blog!</h1>
        <p className='newsletter-para'>Subscribe to get the latest blog, new tech, and exclusive news.</p>
        <form className='subscription-form'>
            <input  className='email-input' type="text" placeholder='Enter your email id' required/>
            <button type='submit' className='subscribe-button'>Subscribe</button>
        </form>
      
    </div>
  )
}

export default NewsLetter
