import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './ItemList.css'
// FIREBASE
import { collection, query, getDocs } from 'firebase/firestore'
import { db } from '../../firebase/firebaseConfig'

// COMPONENTS
import ItemCard from '../ItemCard/ItemCard'

function ItemList () {
  const [itemsData, setItemsData] = useState([])

  useEffect(() => {
    const getProducts = async () => {
      const q = query(collection(db, 'items'))
      const docs = []
      const querySnapshot = await getDocs(q)
      querySnapshot.forEach(doc => {
        docs.push({ ...doc.data(), id: doc.id })
      })
      setItemsData(docs)
    }
    getProducts()
  }, [])

  return (
    <div className='itemList'>
      {itemsData.map(item => (
        <Link to={`/details/${item.id}`} key={item.id}>
          <ItemCard data={item} />
        </Link>
      ))}
    </div>
  )
}

export default ItemList
