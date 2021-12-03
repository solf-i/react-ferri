import React from 'react'
import { Link } from 'react-router-dom'
import './Item.css'

const Item = ({ item }) => {
  
  return (
    <>
    <Link to={`/item/${item.id}`}>
    <div className='ui cards' key={item.id}>
        <div className='card'>
          <div className='image'>          
              <img src={item.thumbnail} alt='imagen' width={150} />            
          </div>
          <div className='content'>
            <div className='header' height={80}>
              ${item.price}
            </div>
            <div className='description'>{item.title}</div>
          </div>
          
        </div>
      </div>

    </Link>
     
    </>
  )
}

export default Item
