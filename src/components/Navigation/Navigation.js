import React from 'react'
import { Link } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget'
import './Navigation.css'

function Navigation () {
  return (
    <nav className='nav'>
      <ul>
        <Link className='link' to='/'>
          Home
        </Link>
        <Link className='link' to='/category/vino'>
          Vinos
        </Link>
        <Link className='link' to='/category/espumante'>
          Espumantes
        </Link>
        <Link className='link' to='/category/cerveza'>
          Cervezas
        </Link>
        <Link className='link' to='/CartWidget'>
          <CartWidget />
        </Link>
      </ul>
    </nav>
  )
}

export default Navigation
