import React, { useContext } from 'react'
import { Icon } from 'semantic-ui-react'
import { CartContext } from '../../CartContext/CartContext'
import { Link } from 'react-router-dom'

function CartWidget () {
  const { items } = useContext(CartContext)
  let itemsInCart = 0

  items.map(item => (itemsInCart += item.qty))

  return (
    <div>
      <Link to='/cart'>
        <Icon name='shopping cart' />
      </Link>
      <span>{itemsInCart}</span>
    </div>
  )
}

export default CartWidget
