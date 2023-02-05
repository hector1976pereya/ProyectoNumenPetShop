import React from "react";
import "../carrusel/estilos.css";
import Carrusel from "../carrusel/Carrusel";
import logo from "../../images/logo.jpg";
import styled from "styled-components";


export default function Home() {
    return (
        <div>
            <Contenedor>
                <h1>Gracias por visitarnos</h1>

                <img src={logo} alt="" />
            </Contenedor>

            <Carrusel />
        </div>
    );
}

const Contenedor= styled.div`

display: flex;
flex-direction:column;
align-items: center;
flex-direction: center;
color:#EB6440;

h1{
  font-size:40px;
}

img{
  margin-top:20px;
  margin-bottom:20px;
 border-radius:50%;

}



`;
