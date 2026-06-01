import React from 'react'
import { RiDeleteBin6Line } from "react-icons/ri";
import image1 from "../../assets/image1.jpg"
import "./CartCard.css"
import { useDispatch } from 'react-redux';
import { RemoveItem } from "../../redux/cartSlice";

function CartCard({name,price,image,id,quantity}) {
  let dispatch = useDispatch();
  return (
    <div className='Cartcard'>
      <div className="left-card">
        <img src={image} alt="Product" />
        <div className="name-price">
            <span className='name'>{name}</span>
            <span className='price'>{price}</span>
        </div>
      </div>
      <div className="right-card">
        <span className='quantity'>Qty: {quantity}</span>
        <button onClick={() => dispatch(RemoveItem(id))}>Remove <RiDeleteBin6Line /></button>
      </div>
    </div>
  )
}

export default CartCard
