import React from "react";
import cart from "../assets/images/cart.png";

import { useSelector } from "react-redux";
const Header = () => {
  const result = useSelector((state) => state.cartData);
  console.log("result", result);
  return (
    <div className="header">
      <div className="cart_div">
        <span>{result.length}</span>
        <img src={cart} alt="" />
      </div>
    </div>
  );
};

export default Header;
