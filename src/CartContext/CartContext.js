import { createContext, useState } from 'react'
import Swal from 'sweetalert2'

export const CartContext = createContext()

export function CartProvider ({ children }) {
  const [items, setItems] = useState([])

  // const isInCart = id => {
  //   const found = items.find(item => item.id === id)
  //   return found
  // }

  const addItem = (item, qty) => {
    setItems([
      ...items,
      {
        ...item,
        qty: qty
      }
    ])

    let prod
    qty > 1 ? (prod = 'productos') : (prod = 'producto')
    Swal.fire(`Agregaste ${qty} ${prod} al carrito.`)
  }

  const removeItem = id => {
    setItems.filter(item => item.id !== id)
  }

  const clearItems = () => {
    setItems([])
  }

  const quantityItem = () => {
    return items.reduce((acum, item) => acum + item.quantity, 0)
  }

  const totalPrice = () => {
    items.reduce((totalCart, item) => totalCart + item.price * item.qty, 0)
  }

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        clearItems,
        totalPrice,
        quantityItem
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
