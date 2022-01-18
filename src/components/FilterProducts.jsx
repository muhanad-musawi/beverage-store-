import React from 'react' 
import '../FilterProducts.css'

function FilterProducts(props) {  

function clickHandler(event) {
  const filter = event.target.innerText; 
  props.setSelectedFilter(filter.toLowerCase())
}

  return (  
    <div>
    <button className='givesMeAllProductsBTN' onClick={clickHandler}>All Products</button>
    <div  className='filter'>  
    
      <button className='filterBTN' onClick={clickHandler}>Water</button> 
      <button className='filterBTN' onClick={clickHandler}>Soft drinks</button> 
      <button className='filterBTN' onClick={clickHandler}>Alcohol free</button>
      <button className='filterBTN' onClick={clickHandler}>Alcohol</button>
    </div> 
    </div>
  )
}

export default FilterProducts
