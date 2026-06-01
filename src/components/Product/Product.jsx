import React from 'react'
import image1 from "../../assets/image1.jpg"
import "./product.css"
import { useDispatch } from "react-redux";
import { Additem } from "../../redux/cartSlice";

function Product({ name, image, price, id }) {
  let dispatch = useDispatch();
  
  const handleAddToCart = () => {
    dispatch(Additem({
      id: id,
      name: name,
      price: price,
      image: image
    }));
  };
  
  return (
    <div className='product'>
      <img src={image} alt="" className="product-img" />
      <div className="product-details">
        <span className='name'>{name}</span>
        <span className='price'>Rs {price}/- </span>
        <button onClick={handleAddToCart}>Add +</button>
      </div>
    </div>
  );
}

export default Product
