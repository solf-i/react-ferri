import React, { useContext } from 'react'
import { CartContext } from '../../CartContext/CartContext'
import Formulario from '../../components/Formulario/Formulario'
import { Button } from 'semantic-ui-react'

function Cart () {
  const { items, removeItem, clearItems, totalPrice } = useContext(CartContext)

  return (
    <>
      <div>
        {items.map(item => (
          <div key={item.id}>
            <div>
              <p>
                {item.title}: $ {item.price}
              </p>
              <br />
              <p>Cantidad: {item.qty}</p>
            </div>

            <span>
              <Button
                color='teal'
                className='ui button tile boton'
                onClick={() => removeItem(item.id)}
              >
                Borrar
              </Button>
            </span>
            <br />
            <h3> El total de su compra es ${totalPrice}</h3>
            <br />
            <Button
              color='teal'
              className='ui button tile boton'
              onClick={() => clearItems()}
            >
              Vaciar Carrito
            </Button>
          </div>
        ))}

        <br />

        <div>
          <Formulario />
          <br />
        </div>
      </div>
    </>
  )
}

export default Cart
