import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../Store'

function NonVeg() {
    const nonVegProducts = useSelector(state => state.products.NonVeg)
    const dispatch = useDispatch();
    const items = nonVegProducts.map((product,index)=>
        <li key={index}>
          {product.name} - ${product.price.toFixed(2)} 
          <button onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
        </li>)
    return (
      <>
        <h2>This is NonVeg Page</h2>
        <ul>{items}</ul>
      </>
    )
}

export default NonVeg;