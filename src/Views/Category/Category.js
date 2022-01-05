import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'

// FIREBASE
import { collection, query, where, getDocs } from 'firebase/firestore'
import { db } from '../../firebase/firebaseConfig'

// COMPONENTS
import ItemCard from '../../components/ItemCard/ItemCard'
import './Category.css'

function Category () {
  const [itemsData, setItemsData] = useState([])

  const category = useParams()

  console.log('category', category)

  /* WHERE: utilizamos para condicionar nuestra peticion */
  useEffect(() => {
    const getProducts = async () => {
      const q = query(
        collection(db, 'items'),
        where('category', '==', category.category)
      )
      const docs = []
      const querySnapshot = await getDocs(q)
      querySnapshot.forEach(doc => {
        docs.push({ ...doc.data(), id: doc.id })
      })
      setItemsData(docs)
    }
    getProducts()
  }, [category.category])

  return (
    <div className='category'>
      {itemsData.map(album => (
        <Link to={`/details/${album.id}`} key={album.id}>
          <ItemCard data={album} />
        </Link>
      ))}
    </div>
  )
}

export default Category
