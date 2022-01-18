import React from 'react' 


function ShoppingCartItem(props) { 

  function removeCartProduct(event) {
    const index = props.index   
    
    const newCartArray = [...props.cartProductArray.slice(0,index), ...props.cartProductArray.slice(index + 1)]
    props.setShoppingCart(newCartArray)
  }



  return (
    <div className='cartProductEntry'> 
          <div> {props.item.name } X 1</div>  
          <div onClick={ removeCartProduct}>🗑️</div>
    </div>
  )
}

export default ShoppingCartItem
