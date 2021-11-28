import {useState, useEffect} from 'react';
import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';
import Spinner from '../Spinner/Spinner'


const ItemListContainer = () => {

  const [items, setItems] = useState ([])
  
  const[isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(()=>{
      fetch('https://jsonplaceholder.typicode.com/photos')
      .then((response)=> response.json())
      .then(respJSON=> {setItems(respJSON); console.log(respJSON)})
      .catch(error => console.log('Error: ', error))
    },)
    
   setTimeout(()=>{
    setIsLoading(false);
   },1000);      
  }, [])

 
    return (
        <div className="listContainer">   
          
          {isLoading ? <Spinner /> :  <ItemList items={items} />}
         
        </div>
             
    );
}

export default ItemListContainer;