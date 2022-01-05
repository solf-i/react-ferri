import React from 'react'
import './Header.css'
import img from './wedding-toast-champagne.gif'
import { Link } from 'react-router-dom'

function Header () {
  return (
    <div className='header'>
      <Link to='/'>
        <img src={img} alt='logo con dos copas brindando' width='400' />
      </Link>
    </div>
  )
}

export default Header
