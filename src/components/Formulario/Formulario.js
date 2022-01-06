import React, { useState } from 'react'
import { Form, Button } from 'semantic-ui-react'

import { collection, addDoc } from 'firebase/firestore'
import Spinner from '../Spinner/Spinner'
import MessageSuccess from '../MessageSuccess/MessageSuccess'

import { db } from '../../firebase/firebaseConfig'

const initialState = {
  name: '',
  lastName: '',
  email: '',
  adress: ''
}

function Formulario () {
  const [values, setValues] = useState(initialState)
  const [purchaseID, setPurchaseID] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const onChangeHandler = e => {
    const { name, value } = e.target
    setValues({ ...values, [name]: value })
  }

  // Añadir nueva información en la colección 'compradores'
  const onSubmitHandler = async e => {
    setIsLoading(true)
    e.preventDefault()
    const docRef = await addDoc(collection(db, 'compradores'), {
      values
    })

    setPurchaseID(docRef)

    setTimeout(() => {
      setIsLoading(false)
      setValues(initialState)
    }, 1000)
  }

  return (
    <div>
      <Form onSubmit={onSubmitHandler}>
        <Form.Group unstackable widths={2}>
          <Form.Input
            placeholder='Nombre'
            name='name'
            value={values.name}
            onChange={onChangeHandler}
          />
          <Form.Input
            placeholder='Apellido'
            name='lastName'
            value={values.lastName}
            onChange={onChangeHandler}
          />
        </Form.Group>
        <Form.Group widths={2}>
          <Form.Input
            placeholder='Dirección'
            name='adress'
            value={values.adress}
            onChange={onChangeHandler}
          />
          <Form.Input
            placeholder='Email'
            name='email'
            value={values.email}
            onChange={onChangeHandler}
          />
        </Form.Group>
        <Button color='teal' className='ui button boton'>
          Aceptar
        </Button>
      </Form>

      {isLoading ? (
        <Spinner />
      ) : (
        purchaseID.id && (
          <div>
            <MessageSuccess msg={purchaseID} />
          </div>
        )
      )}
    </div>
  )
}

export default Formulario
