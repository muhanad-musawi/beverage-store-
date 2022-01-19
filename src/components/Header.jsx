import React from 'react' 
import {  Link } from "react-router-dom"; 
import '../Header.css'

function Header() {
  return (
    <div className='headerLinks'>
     <Link className='linkOrder' to='/'>Order</Link> 

     <Link className='linkCustomer' to='/customer/muhanad'>Customer <div className='customerName'>Muhanad</div></Link> 

     <Link className='linkCustomer' to='/customer/jonas'>Customer <div className='customerName'>Jonas</div></Link> 

     <Link className='linkCustomer' to='/customer/lukas'>Customer <div className='customerName'>Lukas</div></Link>
   </div>
  )
}

export default Header
