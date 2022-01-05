import React, { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router'
import { CartContext } from '../../CartContext/CartContext'
import { Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

// FIREBASE
import {
  collection,
  query,
  getDocs,
  where,
  documentId
} from 'firebase/firestore'
import { db } from '../../firebase/firebaseConfig'

// COMPONENTS
import ItemCard from '../../components/ItemCard/ItemCard'
import ItemCount from '../../components/ItemCount/ItemCount'
import './ItemDetail.css'

function ItemDetail ({ item }) {
  const [itemsData, setItemsData] = useState([])
  const { addItem } = useContext(CartContext)
  const paramsID = useParams()

  useEffect(() => {
    const getProducts = async () => {
      const q = query(
        collection(db, 'items'),
        where(documentId(), '==', paramsID.id)
      )
      const docs = []
      const querySnapshot = await getDocs(q)
      querySnapshot.forEach(doc => {
        docs.push({ ...doc.data(), id: doc.id })
      })
      setItemsData(docs)
    }

    getProducts()
  }, [paramsID])

  return (
    <div className='ui centered card'>
      {itemsData.map(album => (
        <ItemCard data={album} key={album.title} />
      ))}

      <ItemCount item={item} stock={5} initial={0} onAdd={addItem} />

      <Link to='/cart'>
        <Button color='teal' className='ui fluid button tile boton'>
          Finalizar Compra
        </Button>
      </Link>

      <Link to='/'>
        <Button basic color='teal' className='ui fluid button tile boton'>
          Seguir Comprando
        </Button>
      </Link>
    </div>
  )
}

export default ItemDetail
