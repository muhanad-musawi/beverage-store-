import React from 'react' 
import '../CustomerItem.css'

function CustomerItem(props) {
  return (
    <div className='orderEntry' > 
    <div className='cartProductEntry'> 
          <div> {props.item.name } X 1</div>  
          <div>{props.item.price} €</div> 
          
    </div> 
    </div>
  )
}

export default CustomerItem
