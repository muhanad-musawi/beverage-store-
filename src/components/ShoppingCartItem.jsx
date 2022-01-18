import React from 'react' 


function ShoppingCartItem(props) { 

  function removeCartProduct(event) {
    const index = props.index   
    
    const newCartArray = [...props.shoppingCart.slice(0,index), ...props.shoppingCart.slice(index + 1)]
    props.setShoppingCart(newCartArray)
  }



  return (
    <div>
    <div className='cartProductEntry'> 
          <div> {props.item.name } X 1</div>  
          <div>{props.item.price} €</div> 
          <div onClick={ removeCartProduct}>🗑️</div>
    </div> 
    </div>
  )
}

export default ShoppingCartItem
