import React from 'react';
import './ItemListContainer.css';
import Item from '../Item.js/Item';


const ItemListContainer = ({foto}) => {
     
    return (
        <div className="listContainer">
         <h1>Productos</h1>
          <div className="contenido">         
            {foto.map((foto) => {
              return (
                <div key={foto.id}>
                    <Item data={foto}  />
                </div>
                )
            })}
          </div>            
        </div>
    );
}


export default ItemListContainer;
