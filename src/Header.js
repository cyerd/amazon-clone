import React from "react";
import "./header.css";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import SearchIcon from "@material-ui/icons/Search";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <Link to="/">
        <img
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
          className="header__logo"
        />
      </Link>
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <div className="header__option">
          <span className="header__optionLineOne">Hello</span>
          <span className="header__optionLineTwo">Sign In</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Return</span>
          <span className="header__optionLineTwo">& Orders</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>
        <div className="header__optionBasket">
          <Link to="/checkout">
            <ShoppingBasketIcon style={{ color: "white" }} />
          </Link>
          <span className="Header__optionLineTwo header__optionCount">0</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
