import React from "react";
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './views/Home'

function App () {
  
   return (
     <div className="App">
     <Router>     
     <NavBar />

       <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      </Router>
     
       <ItemListContainer />
       <ItemDetailContainer />
     </div>   
    );
  
}

export default App;
