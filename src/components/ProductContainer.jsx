import React, {useState, useEffect} from 'react' 
import Product from './Product'  



function ProductContainer(props) { 
 
  const setShoppingCart = props.setShoppingCart
  const shoppingCart = props.shoppingCart

  const [filterProducts, setFilterProducts] = useState(props.products)
  
  useEffect(() => {  
   if (props.selectedFilter !== 'all products') {
     setFilterProducts(props.products.filter(product => product.category === props.selectedFilter))
   } else { 
     setFilterProducts(props.products)
   }
  },[props.selectedFilter, props.products])

  return (
    <div className='Products-Cards'>
      {filterProducts.map((element,index ) => (<Product  
      product={element} setShoppingCart={setShoppingCart}  shoppingCart={shoppingCart} key={element.id}/>))}
    </div>
  )
}

export default ProductContainer
