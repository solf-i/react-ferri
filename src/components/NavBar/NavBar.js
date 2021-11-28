import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import {NavLink} from 'react-router-dom'

const NavBar = () => {
  return (
    <>
    <div className="ui pointing menu">
    <div className="item">Cheers!</div>
    <NavLink to="/" className="item">Home</NavLink>
    <NavLink to="/" className="item"> <CartWidget /> </NavLink>
    </div>
    </> 
  )
}

export default NavBar
