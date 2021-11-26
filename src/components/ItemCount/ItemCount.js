import React, {useState} from 'react';
import "./ItemCount.css"
import {Icon} from 'semantic-ui-react'

const ItemCount = ({stock, initial}) => {    
    
  const [counter, setCounter] = useState(0);
 
	const Up = () => {

      if(counter <= 9){
          setCounter(counter + 1);     
      }		      

      if(counter === 10){
          alert("Última unidad!")
      }
	};

	const Down = () => {

      if(counter > 0){
          setCounter(counter - 1);     
      }	
		
	};
    return (

     <div>
         	<div className='CounterSection'>
                 <button  onClick={Down}> <Icon  className="down" name='delete' />{initial}</button>
				<p>{counter}</p>
                 <button onClick={Up} > <Icon className="up" name='add' />{stock}</button>					
			</div>
     </div>
    )
}

export default ItemCount
