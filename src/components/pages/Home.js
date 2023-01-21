import React from 'react';
import '../carrusel/estilos.css'
import Carrusel from '../carrusel/Carrusel';
import logo from "../../images/logo.jpg"

export default function Home() {
  return (
    <div>
    

<img 
style={
  {
    borderRadius:"50%",
    marginLeft: '30%',
    marginRight: '30%',
    marginTop:"2%"
  }
}

src={logo} alt="" />
      <Carrusel/>

    </div>
      
    
  );
}