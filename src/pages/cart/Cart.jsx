import React from 'react'
import { useSelector } from 'react-redux'
import "./Cart.css"
import CartCard from "../../components/CartCard/CartCard"
import ec from "../../assets/emptycart.png"
function Cart() {
  let items = useSelector(state=>state.cart)
  let totalPrice = items && items.length > 0 ? items.reduce((total, item) => total + (item.price * item.quantity), 0) : 0;
  return (
    <div className='cart'>
        {!items || items.length === 0 ? (
        <div className='empty-cart'>
        <img src={ec} alt="" />    
        <h2>Empty cart</h2>
        </div>
        ) : (
        <div className="cartCard-section">
          {items.map((item)=>(
            <CartCard name={item.name} price={item.price} image={item.image} id={item.id} quantity={item.quantity} />
          ))}
          <div className="price-section">
            <span>total Products : {items.length}</span>
            <span>Total Price : Rs {totalPrice}</span>
          </div>
        </div>
        )}
    </div>
  )
}

export default Cart
