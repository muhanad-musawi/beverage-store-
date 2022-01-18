import React, {useState} from 'react' 
import ShoppingCartItem from './ShoppingCartItem'
import Product from './Product' 
import '../ShoppingCart.css'





function ShoppingCart(props ) {

const [showShoppingCart, setShowShoppingCart] = useState(false)



  return (
    <div> 
      <div className='openShowShoppingCart'>
      <button className='cartBtn' onClick={() => setShowShoppingCart(true)}>🛒 <span>{props.shoppingCart.length}</span>  </button>  
      
      </div>
      
     { showShoppingCart &&  

      <div className='cartProducts'>  
      <span className='closeShowShoppingCart' onClick={() => setShowShoppingCart(false)}>❌</span>
        <div className='entry'>{props.shoppingCart.map(( item,index)=> <ShoppingCartItem  shoppingCart={props.shoppingCart} setShoppingCart={props.setShoppingCart} item={item}  index={index} key={index} /> )}   
         
        <div>Total order value <span>{}</span> €</div> 

        <div className='sendToCustomer'>
        <input className='inputCustomer' type="text" />
        <button className='sendToCustomerBtn'>send to customer</button> 
        </div>
        </div> 
        
      </div> 
      }
    </div>
  )
}

export default ShoppingCart
