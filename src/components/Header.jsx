import React from 'react';
import Logo from "../utils/Images/Netflix-logo.png";

const Header = () => {
  return (
    <div className='absolute bg-gradient-to-b from-black z-10'> 
         <img className= " p-2  w-48" src={Logo} alt="Logo-image" /> 
    </div>
  )
}

export default Header;