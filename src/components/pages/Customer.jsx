import React from 'react' 
import {useParams} from 'react-router-dom'
import CustomerItem from '../CustomerItem' 
import './customer.css'
function Customer(props) { 
  const {name} = useParams() 
  const order = props.customerOrders[name] 

  return (
    
      <div className='customerOrderEntry' >
      {order.map((item, index) =>  <CustomerItem item={item} key={index} /> )}
    </div> 
    
  )
}

export default Customer
