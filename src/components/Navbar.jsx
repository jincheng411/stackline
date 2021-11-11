import React from 'react';
import Logo from '../../dist/assets/stackline_logo.svg';
const Navbar = () => {
  return (
    <div className="navbar">
      <span><img src={Logo} className="navbar_logo"/></span>
    </div>
  )
}

export default Navbar;