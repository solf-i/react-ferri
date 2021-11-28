import {useState, useEffect } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailContainer = () => {
    
  const [item, setItem] = useState ({})

  
  useEffect(() => {

    setTimeout(()=>{
      fetch('https://jsonplaceholder.typicode.com/photos')
      .then((response)=> response.json())
      .then(respJSON=> {setItem(respJSON); console.log(respJSON)})
      .catch(error => console.log('Error: ', error))
    }, 0)

}, [])

    return (
        <>
         <ItemDetail item={item}/>   
        </>
    )
}

export default ItemDetailContainer
