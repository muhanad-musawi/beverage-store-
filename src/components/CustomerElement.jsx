import React ,{useState} from 'react' 
import CustomerItem from './CustomerItem' 

import '../CustomerElement.css'
function CustomerElement(props) {
   
  const totalprice = props.order.reduce((acc,item) => { 
    return parseFloat(item.price.replace(',', '.')) + acc
   },0) 

   const orderDate = new Date()

  const [showMoreOrderInfo, setShowMoreOrderInfo] = useState(false)  
  
  return (
     <div className='itemBox'> 
     <div className='orderFrom'>Your order from <span className='orderDate'>{orderDate.getDate()} .{orderDate.getMonth() + 1}.{orderDate.getFullYear()} </span> </div> 
     <div>  Total Price {totalprice.toFixed(2).replace('.', ',')}€</div>
      <div >  
        <div className='infoFlexEnd'>
        <div className='moreOrderinfo' onClick={() => setShowMoreOrderInfo(true)}>i</div></div>  

        { showMoreOrderInfo &&      
      <div> 
        <div className='closeShowShoppingCart' onClick={() => setShowMoreOrderInfo(false)}>❌</div>
      { props.order.map((item,index) =>  <CustomerItem item={item} key={index} /> )}</div>} 

    </div>  
    </div>
    
  )
}

export default CustomerElement

