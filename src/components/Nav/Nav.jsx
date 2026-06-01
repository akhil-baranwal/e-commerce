import React from "react";
import { FaShopware } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";
import { IoIosCart } from "react-icons/io";
import "./Nav.css";
import home from "../../pages/home/home";
import {Link} from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";

function Nav() {
  let dispatch = useDispatch();
  let items = useSelector((state)=>state.cart);
  return (
    <div className="Nav">
      <div className="top-nav">
        <Link to="/"><div className="logo">
          <span>V-shop</span>
          <FaShopware />
        </div></Link>
        <form className="search-box">
          <input type="text" placeholder="Search items.."/>
          <button><IoIosSearch /></button>
        </form>
        <Link to="/cart"><div className="cart-box">
          <IoIosCart />
          <span>{items?.reduce((total, item) => total + item.quantity, 0) || 0}</span>
        </div></Link>
      </div>
      <div className="bottom-nav">
        <Link to="/"><li>Home</li></Link>
        <Link to="/shop"><li>Shop</li></Link>
        <Link to="/cart"><li>Cart</li></Link>
        <Link to="/contact"><li>Contact</li></Link>
      </div>
    </div>
  );
}

export default Nav;