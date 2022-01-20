import React, {useState} from 'react' 
import ShoppingCartItem from './ShoppingCartItem'
import Product from './Product' 
import '../ShoppingCart.css'





function ShoppingCart(props ) {

const [showShoppingCart, setShowShoppingCart] = useState(false)  

const [customerInput , setCustomerInput] = useState('') 

function handelInput(event) { 
setCustomerInput(event.target.value)
  
} 

function sendToCustomer() {
  const name = customerInput.toLowerCase();  

  const oldOrder =  props.customerOrders[name]  
const ordersRefresh =  { 
  ...props.customerOrders, 
 [name]:[...oldOrder, [...props.shoppingCart]]
}
  props.setCustomerOrders(ordersRefresh)
  
  props.setShoppingCart([])
 
  setCustomerInput('')

}

const totalprice = props.shoppingCart.reduce((acc,item) => { 
 return parseFloat(item.price.replace(',', '.')) + acc
},0) 




  return (
    <div> 
      <div className='openShowShoppingCart'>
      <button className='cartBtn' onClick={() => setShowShoppingCart(true)}>🛒 <span>{props.shoppingCart.length}</span>  </button>  
      
      </div>
      
     { showShoppingCart &&  

      <div className='cartProducts'>  
      <div className='closeShowShoppingCart' onClick={() => setShowShoppingCart(false)}>❌</div>
        <div className='entry'>{props.shoppingCart.map(( item,index)=> <ShoppingCartItem  shoppingCart={props.shoppingCart} setShoppingCart={props.setShoppingCart} item={item}  index={index} key={index} /> )}   
         
        <div>Total order value <span className='totalprice'>{totalprice.toFixed(2).replace('.', ',') }</span> €</div> 

        <div className='sendToCustomer'>
        <input className='inputCustomer' type="text" onChange={handelInput} value={customerInput} />
        <button className='sendToCustomerBtn' onClick={sendToCustomer}>send to customer</button> 
        </div>
        </div> 
        
      </div> 
      }
    </div>
  )
}

export default ShoppingCart
