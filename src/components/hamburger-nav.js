import React from 'react';

const HamburgerNav = (props) => {
  return(
    <div className="hamburger-nav">
    <input type="checkbox" id="hamburger-menu" />
    <label htmlFor="hamburger-menu">
    <span></span>
    <span></span>
    <span></span></label>
    <ul className="navs-mobile">
    <li className="">CoinBase</li>
    <li className="">Contact Us</li>
    <li className="">Login</li>
    <li className="">Sign-up</li>
    </ul>
    </div>
  );
}
export default HamburgerNav;
