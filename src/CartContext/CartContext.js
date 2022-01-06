import { createContext, useState } from 'react'

export const CartContext = createContext()

export function CartProvider ({ children }) {
  const [items, setItems] = useState([])

  const addItem = (item, qty) => {
    setItems([
      ...items,
      {
        ...item,
        qty: qty
      }
    ])
  }

  const removeItem = id => {
    setItems(items.filter(item => item.id !== id))
  }

  const clearItems = () => {
    setItems([])
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
        totalPrice
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
