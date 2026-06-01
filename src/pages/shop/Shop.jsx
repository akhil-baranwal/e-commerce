import React, { useState } from 'react'
import "./Shop.css"
import {category} from "../../category"
import { dummydata } from '../../dummydata';
import Product from '../../components/Product/Product';
function Shop() {
    let [cate, setCate] = useState(dummydata);
      function filterProducts(categoryName){
        if(categoryName === "all"){
            setCate(dummydata);
        }
        else{
            const updatedata = dummydata.filter((item)=>item.category === categoryName);
            setCate(updatedata);
        }
      }
  return (
    <div className='shop'>
      <div className="category-section">
             {category.map((item)=>(
              <div className="category-card" key={item.id} onClick={()=>{
                filterProducts(item.name)
              }}>
                <img src={item.image} alt="" />
                <span>{item.name}</span>
              </div>
            ))}
        </div>
        <div className="product-section">
          {cate.map((item)=>(
          <Product
          key={item.id}
          id={item.id}
          name={item.name} 
          price={item.price}
          image={item.image} 
          /> ))}
        </div>
    </div>
  )
}

export default Shop
