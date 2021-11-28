import React, {useState} from 'react';
import "./ItemCount.css"

const ItemCount = ({stock, initial, onAdd }) => {    
    
  const [counter, setCounter] = useState(initial);
 
	const Up = () => {

      if(counter < stock){
          setCounter(counter + 1);     
      }	 
	};

	const Down = () => {

      if(counter > 0){
          setCounter(counter - 1);     
      }			
	};

    return (
        <div className="ui cards">       
        <div className="card">
        <div className="extra content">
                 <div className="ui three buttons">
                     <div className="ui basic red button" onClick={Down}>-</div>
                     <div className="ui basic button">{counter}</div>
                     <div className="ui basic green button" onClick={Up}>+</div>
                 </div>
             </div>  

             { counter > 0 ? 
              <div className="ui bottom attached button" onClick={()=> onAdd(counter)}>
              <i className="cart icon"></i>
               Añadir al carrito
              </div>
                :
              <div className="ui bottom attached button disabled">
              <i className="cart icon"></i>
               Añadir al carrito
              </div>
             }       

        </div>           
        </div>
    
    )
}

export default ItemCount
