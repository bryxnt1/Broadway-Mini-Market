import React from 'react'
import Logo from '../assets/Logo.PNG'

 function Navbar() {
  return (
    <div className='navbar'>
      <div className='leftSide'>
       <img src={Logo} />
      </div>
      
      <div className='rightSide'>
      </div>
    </div>
  );
}

export default Navbar;
