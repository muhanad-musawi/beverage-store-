import React, { useState, useEffect } from 'react'; 
import '../products.css' 


function Product(props) { 

  const [count, setCount] = useState(0);
   
  useEffect(()=> {  
    const id = props.product.id 
    const filterShoppingCart =  props.shoppingCart.filter( product => product.id === id ) 
    setCount(filterShoppingCart.length)
  },[props.shoppingCart, props.product])

 function clickCount() {
  
  props.setShoppingCart([...props.shoppingCart, props.product ]) 
  
 }

  return ( 
  
    <div className="card"> 

      <div > 
      <img src={props.product.img} alt="Water"></img> 
      <div className="container">
      <h4>{props.product.name}</h4>
      <p> {props.product.price} €</p>  
      
      <button onClick={clickCount}>Add to cart</button><span className="count">{count}</span>  
     
      </div>
     </div>
    </div> 
  )
} 



export default Product
