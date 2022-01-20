import React from 'react' 
import {useParams} from 'react-router-dom'
import CustomerElement from '../CustomerElement' 
import './customer.css'
function Customer(props) { 
  const {name} = useParams() 
  const orders = props.customerOrders[name] 

  return (
     
    
      <div> 
        <div className='welcomeText'>Hello {name}, here are all your orders listed</div>
      {orders.map((order, index) =>  <CustomerElement customerOrders={props.customerOrders}  order={order} key={index} /> )}
    </div> 
    
  )
}

export default Customer
