import React from 'react'

const ItemDetail = ({ item }) => {
    return (
        <div>
          <img src={item.thumbnailUrl} alt={item.title} width={300} />
          <h3>{item.title}</h3>
        </div>
    )
}

export default ItemDetail
