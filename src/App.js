import {  Routes, Route} from "react-router-dom";
import './App.css';  
import { useState } from "react";
import Header from './components/Header';  
import Customer from "./components/pages/Customer";

import Home from './components/pages/Home';





function App() {  

  const initOrders = {   
    muhanad: [], 
    lukas: [], 
    jonas: []
  }

  const [ customerOrders , setCustomerOrders ] = useState(initOrders)

  return (
    <div className="App">  
    <Header/>  
 <Routes> 

   <Route path="/" element={<Home  setCustomerOrders={setCustomerOrders} customerOrders={customerOrders}/>}></Route>  

   <Route path="/customer/:name" element={<Customer  customerOrders={customerOrders} />}></Route> 


 </Routes>

 
   
   

    </div>
  );
}

export default App;
