import React, { useState } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Dropdown from './Dropdown';

// Navbar

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
      } else {
      setDropdown(false);
    }
  };

  return (
    <>
      <nav className='navbar'>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
        <i class="fa-solid fa-cat"></i>&nbsp;
          Almacén para mascotas 
        </Link>
        
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>


          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              Home
            </Link>
          </li>

          <li
            className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to='/productos'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Productos <i className='fa-solid fa-angle-down' />
            </Link>
            {dropdown && <Dropdown />}
            
          </li>

          <li className='nav-item'>
            <Link
              to='/servicios'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Servicios
            </Link>
            
          </li>
  
          <li className='nav-item'>
            <Link
              to='/contacto'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Contacto
            </Link>
          </li>   

          <li className='nav-item'>
            <Link
              to='/carrito'
              className='nav-links-mobile'
              onClick={closeMobileMenu}
            >
              Carrito de compras
            </Link>
          </li>

        </ul>
        <Button />
      </nav>
    </>
  );
}

export default Navbar;