import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <>
      <div className='ui pointing menu' id='link'>
        <NavLink to='/' className='item '> Cheers!</NavLink>
        <NavLink to='/category/MLA1404' className='item '> Vinos </NavLink>    
        <NavLink to='/category/MLA417665' className='item '> Espumantes </NavLink>        
        <NavLink to='/category/MLA403656' className='item '> Cervezas </NavLink>        
        <NavLink to='/' className='item '>  <CartWidget /> </NavLink>
      </div>
    </>
  )
}

export default NavBar
