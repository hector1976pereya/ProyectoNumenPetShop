import React from 'react';
import '../../App.css';
import Nosotros from '../servicios/Nosotros';
import Formulario from '../servicios/Formulario';
import Servicio from "../servicios/Servicio";

export default function Productos() {
 
  return ( 
    <section className="App">
    <div>
      <Nosotros/>
    </div> 
    <div>
      <Formulario/>
    </div>
    <div>
      <Servicio/>
    </div>
    </section>
  );
}