import { useState, useEffect } from 'react'
import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList'
import Spinner from '../Spinner/Spinner'

const ItemListContainer = ({ categoryId }) => {
  const [items, setItems] = useState([])

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetch(
      `https://api.mercadolibre.com/sites/MLA/search?category=${categoryId}&limit=10`
    )
      .then(response => response.json())
      .then(respJSON => {
        setItems(respJSON.results)
      })
      .catch(error => console.log('Error: ', error))

    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
    
  }, [categoryId])

  return (
    <div className='listContainer'>
      <h1>{categoryId.name}</h1>

      {isLoading ? <Spinner /> : <ItemList items={items} /> }

    </div>
  )
}

export default ItemListContainer
