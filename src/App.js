import React, {useState, useEffect } from "react";
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemCount from "./components/ItemCount/ItemCount";
import Spinner from './components/Spinner/Spinner'


function App () {
  
  const [foto, setFoto] = useState([]);

  const[isLoading, setIsLoading] = useState(true);

  useEffect (() => {  

      fetch('https://jsonplaceholder.typicode.com/photos')
      .then(response => response.json())
      .then(json => setFoto(json))

   setTimeout(()=>{
    setIsLoading(false);
   },2000);  
        
    }, []);

   return (
      <div className="App">
       <NavBar />
       <ItemCount stock="10" initial="0"/>
       {isLoading ? <Spinner /> :  <ItemListContainer foto={foto} /> }         
     
      </div>   
    );
  
}

export default App;
