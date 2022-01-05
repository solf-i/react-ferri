import React, { useContext } from 'react'
import { Icon } from 'semantic-ui-react'
import { CartContext } from '../../CartContext/CartContext'

function CartWidget () {
  const { items } = useContext(CartContext)
  let itemsInCart = 0

  items.map(item => (itemsInCart += item.qty))

  return (
    <div>
      <Icon name='shopping cart' />
      <span>{itemsInCart}</span>
    </div>
  )
}

export default CartWidget
