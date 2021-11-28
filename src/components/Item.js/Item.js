import React from 'react'
import './Item.css'
import ItemCount from '../ItemCount/ItemCount'
import Swal from 'sweetalert2'

const Item = ({ item }) => {

	const addToCart = (counter) => {
		let prod;
	   counter > 1? prod = 'productos' : prod = 'producto';
	   Swal.fire(`Agregaste ${counter} ${prod} al carrito.`)
	  }
		 
  return (
    <>
	   <div className="ui cards">        
             <div className="card">
             <div className="image">
                 <img src={item.thumbnailUrl} alt="imagen" width={150}/>
             </div>
             <div className="content">
                 <div className="header" height={80}>{item.title}</div>
                 <div className="description">{item.title}</div>
				
             </div>	 
			 <ItemCount stock={5} initial={0} onAdd={addToCart} />  
             </div>   
        </div>



    </>
  )
}

export default Item
