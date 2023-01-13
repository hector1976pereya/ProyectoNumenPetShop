import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import Productos from './components/pages/Productos';
import Servicios from './components/pages/Servicios';
import Contacto from './components/pages/Contacto';
import Carrito from './components/pages/Carrito';
import Perros from './components/pages/Productos-perros';
import Gatos from './components/pages/Productos-gatos';
import Indumentaria from './components/pages/Indumentaria';
import Accesorios from './components/pages/Accesorios';

function App() {
  return (<>
    <NavBarr/>
  </>
    
  );
}


export default App;