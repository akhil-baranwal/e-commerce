import React from "react";
import { FaShopware } from "react-icons/fa6";
import Home from "../../pages/home/home";

function Nav() {
  return (
    <div className="Nav">
      <div className="top-nav">
        <div className="logo">
          <span>V-shop</span>
          <FaShopware />
        </div>
      </div>

      <div className="bottom-nav"></div>
    </div>
  );
}

export default Home;