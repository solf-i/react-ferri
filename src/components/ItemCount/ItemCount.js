import React, { useState, useContext } from 'react'
import './ItemCount.css'
import { CartContext } from '../../CartContext/CartContext'

const ItemCount = ({ stock, initial }) => {
  const [qty, setQty] = useState(initial)
  const { addItem } = useContext(CartContext)

  const Up = () => {
    if (qty < stock) {
      setQty(qty + 1)
    }
  }

  const Down = () => {
    if (qty > 0) {
      setQty(qty - 1)
    }
  }

  return (
    <div className='ui cards'>
      <div className='card'>
        <div className='extra content'>
          <div className='ui three buttons'>
            <div className='ui basic red button' onClick={Down}>
              -
            </div>
            <div className='ui basic button'>{qty}</div>
            <div className='ui basic green button' onClick={Up}>
              +
            </div>
          </div>
        </div>

        {qty > 0 ? (
          <div
            className='ui bottom attached button'
            onClick={() => addItem(qty)}
          >
            <i className='cart icon'></i>
            Añadir al carrito
          </div>
        ) : (
          <div className='ui bottom attached button disabled'>
            <i className='cart icon'></i>
            Añadir al carrito
          </div>
        )}
      </div>
    </div>
  )
}

export default ItemCount
