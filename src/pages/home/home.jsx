import React, { useState } from 'react';
import bg from "../../assets/bg0.gif";
import "./home.css";
import { category } from "../../category";
import Product from "../../components/Product/Product";
import { dummydata } from "../../dummydata";

function Home() {
  let [cate, setCate] = useState(dummydata);
  function filterProducts(categoryName){
    const updatedata = dummydata.filter((item)=>item.category === categoryName);
    setCate(updatedata);
  }
  return (
    <div className="home">
      <div className="hero-bg">
        <img src={bg} alt="" />
      </div>
    <div className="category-section">
       {category.slice(0,4).map((item)=>(
        <div className="category-card" key={item.id} onClick={()=>{
          filterProducts(item.name)
        }}>
          <img src={item.image} alt="" />
          <span>{item.name}</span>
        </div>
      ))}
    </div>
     <h1 className="h1">Trending Products</h1>
     <div className="product-section">
       {cate.slice(0,7).map((item)=>(
       <Product 
       key={item.id}
       id={item.id}  
       name={item.name} 
       price={item.price}
       image={item.image} 
       /> ))}
      </div>
    </div>
  );
}

export default Home;