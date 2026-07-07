import React from 'react'
import { assets, footer_data } from '../assets/assets'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='container'>
            <div className='about'>
              <img src={assets.logo} alt="logo" className='about-logo'/>
              <p className='about-para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis similique magni a numquam modi nulla aliquid explicabo voluptatum fugiat. Sit asperiores aliquam, maiores, corporis, commodi nam necessitatibus quasi ratione nisi laborum blanditiis error praesentium.
              </p>
            </div>
            <div className='menu-items'>
              {footer_data.map((section, index )=>(
                <div key={index}>
                  <h3 className='menu-title'>{section.title}</h3>
                  <ul className='list'>
                    {section.links.map((link, i)=>(
                      <li key={i}>
                        <a className='item' href="#">{link}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
        </div>
        <p className='credits'>© 2026 QuickBlog • Built by <a className='contact-links' target='_blank' href="https://portfolio-sandy-alpha-bks6lgnnzk.vercel.app/" rel="noopener noreferrer">Vyom</a> • <a  className='contact-links' href="https://github.com/vyom-gahlot" target='_blank' rel="noopener noreferrer">GitHub</a></p>
    </div>
  )
}

export default Footer
