import React from 'react';
import SearchBar from './search_bar';
import DesktopNavbar from './desktop-navbar';
import HamburgerNav from './hamburger-nav';

const HeaderNavBar = (props) => {
  return(
    <div className="header-navbar">
    <HamburgerNav />
    <div className="logo">
      <span className="logo-start">Singh</span>
      <img width="50px" src="http://icons.iconarchive.com/icons/icons-land/vista-hardware-devices/256/Security-Camera-icon.png"/>
      <span className="logo-end">Security</span>
    </div>
    <div className="search-bar-outer"><SearchBar onInputChange={term => props.onInputChange(term)}/></div>
    <DesktopNavbar />
    </div>
  )
}
export default HeaderNavBar;

// <ul className="header-navbar-mobile">
// <li className="logo">
//   <span className="logo-start">Singh</span>
//   <img width="50px" src="http://icons.iconarchive.com/icons/icons-land/vista-hardware-devices/256/Security-Camera-icon.png"/>
//   <span className="logo-end">Security</span>
// </li>
// <li className="search-bar-outer"><SearchBar onInputChange={term => props.onInputChange(term)}/></li>
// <li className="coin-base">
// <span>-</span>
// <span>-</span>
// </li>
// </ul>
