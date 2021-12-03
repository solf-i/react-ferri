import { useState, useEffect } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailContainer = ({ categoryId }) => {


  const [item, setItem] = useState([])
 

  useEffect(() => {   

    fetch(
      `https://api.mercadolibre.com/sites/MLA/search?category=${categoryId}&limit=10`
    )
      .then(response => response.json())
      .then(respJSON => {
        setItem(respJSON.results)
      })
      .catch(error => console.log('Error: ', error))
       
  }, [categoryId]);

  return (
    <>
      <ItemDetail item={item} />
    </>
  )
}

export default ItemDetailContainer
