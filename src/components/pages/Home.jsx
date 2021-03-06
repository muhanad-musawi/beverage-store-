import React from 'react'  
import './Home.css'
import ProductContainer from '../ProductContainer'; 
import FilterProducts from '../FilterProducts';  

import ShoppingCart from '../ShoppingCart'; 

import {useState} from 'react'; 

import water from '../../images/water.jpg';  
import cocaCola from '../../images/cocaCola.jpeg'; 
import fanta from '../../images/fanta.webp';
import sprite from '../../images/sprite.webp'; 
import mojitoFree from '../../images/mojitoFree.png'; 
import SashFritz from '../../images/SashFritz.jpg' 

function Home(props) { 

  const initialArray = [ 
    { 
      img: water, 
      name: 'water', 
      price: '2,50', 
      category: 'water',  
      id: 1,
    }, 
    { 
     img: cocaCola, 
     name: 'coca Cola', 
     price: '3,50', 
     category: 'soft drinks', 
     id: 2,
   }, 
   { 
     img: fanta, 
     name: 'Fanta', 
     price: '3,50', 
     category: 'soft drinks',
     id: 3, 
   },
   { 
     img: sprite, 
     name: 'Sprite', 
     price: '3,50', 
     category: 'soft drinks',
     id: 4,
   },
   { 
     img: mojitoFree, 
     name: 'Mojito- Alcohol Free', 
     price: '5,50',  
     category: 'alcohol free',
     id: 5,
   }, 
   { 
     img: SashFritz, 
     name: 'Sash-Fritz', 
     price: '34,95', 
     category: 'alcohol',
     id: 6,
   }, 
  ]
   const [productArray, setProductArray] = useState(initialArray)
  
   const [selectedFilter, setSelectedFilter]= useState('all products')
 
   const [ shoppingCart, setShoppingCart]= useState([])

  return (
    <div> 
      <ShoppingCart setCustomerOrders={props.setCustomerOrders} setShoppingCart={setShoppingCart} shoppingCart={shoppingCart} customerOrders={props.customerOrders}/>
 
 <FilterProducts setSelectedFilter= {setSelectedFilter}/> 


<ProductContainer products = {productArray}  selectedFilter = {selectedFilter} setShoppingCart={setShoppingCart} shoppingCart={shoppingCart}/> 
      
    </div>
  )
}

export default Home
