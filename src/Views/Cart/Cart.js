import React, { useContext } from 'react'
import { CartContext } from '../../CartContext/CartContext'
import Formulario from '../../components/Formulario/Formulario'

function Cart () {
  const { items, removeItem, clearItems, totalPrice } = useContext(CartContext)

  return (
    <>
      <div>
        {items.map(item => (
          <div key={item.id}>
            <h1>
              {item.title}: ${item.price}
            </h1>
            <h3>{item.qty}</h3>
            <button onClick={() => removeItem(item.id)}>Borrar</button>
          </div>
        ))}

        <div>
          <h1> El total de su compra es ${totalPrice}</h1>
          <br />
          <Formulario />
          <br />
        </div>
        <button onClick={() => clearItems()}>Vaciar Carrito</button>
      </div>
    </>
  )
}

export default Cart

//{items.id ? (
//  <div>
//    {items.map(item => (
//      <div key={item.id}>
//        <h1>
//          {item.title}: ${item.price}
//        </h1>
//        <h3>{item.qty}</h3>
//        <button onClick={() => removeItem(item.id)}>Borrar</button>
//      </div>
//    ))}
//
//    <div>
//      <h1> El total de su compra es ${totalPrice}</h1>
//      <button>Pagar</button>
//    </div>
//    <button onClick={() => clearItems()}>Vaciar Carrito</button>
//  </div>
//) : (
//  <div>
//    <h2>No hay productos en tu carrito</h2>
//  </div>
//)}
//
