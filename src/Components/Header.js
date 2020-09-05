import React from 'react';
import { FiMenu } from 'react-icons/fi';

const Header = () => {
  return (
    <header>
      <FiMenu className='hamburger' />
      <code className='logo-text'>lofi-code</code>
    </header>
  )
}

export default Header;
