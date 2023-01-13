import React from 'react'; 
import './Button.css';
import { Link } from 'react-router-dom'

// Boton carrito de compras

export function Button() {
  return (
  <Link to='carrito'>
    <button className='btn'> Carrito <i class="fa-solid fa-cart-shopping"></i>
    </button>
  </Link>
  );
}


