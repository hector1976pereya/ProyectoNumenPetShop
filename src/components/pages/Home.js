import React from "react";
import "../carrusel/estilos.css";
import Carrusel from "../carrusel/Carrusel";
import logo from "../../images/logo.jpg";
import logoPerro from "../../images/perro.jpg";
import styled from "styled-components";


const img1="https://catycanar.vtexassets.com/arquivos/ids/167311-800-auto?v=638071566721400000&width=800&height=auto&aspect=true"
const img2= "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/145/238/products/screenshot_61-c042b5a512bdefa5ea16678599846932-480-0.webp"
const img3="https://nordenpet.com.ar/wp-content/uploads/2021/02/Optimum-Perro-Cachorro-Raza-Pequena.jpg"
const img4="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQq1BeIjmSraR8Fq8gs-HJC6CVnhxgGOPJjUeeUq0S85lf27yn_QICM6ckZ2U3XsfTENzmB_7VEbCumlmUh0W7yx1uqWJN7g7qc5v2LV7TnK0G4GO5SSjZWEA"
export default function Home() {
    return (
        <div>
            <Contenedor>
                <h1>Gracias por visitarnos</h1>

                <img src={logo} alt="" />
                <img src={logoPerro} alt="" />
            </Contenedor>

            <Carrusel />
            <h2
            style={{
             border: "2px solid black",
             marginTop:"20px",
            textAlign:"center",
            color:"#497174",
            textShadow: "1px 1px 2px black",
        

            }}
            
            >Productos destacados</h2>
            <ContenedorImgBody>

            <img src={img1} alt="" />
            <img src={img2} alt="" />
            <img src={img3} alt="" />
            <img src={img4} alt="" />
            </ContenedorImgBody>
            
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
  text-shadow: 3px 3px 4px black;
  margin-top:10px
}

img{
  margin-top:20px;
  margin-bottom:20px;
 border-radius:50%;
 border: 2px solid #497174;

}

`;

const ContenedorImgBody=styled.div`


    display: flex;
    justify-content: center;

@media(max-width:768px){
    
   
    flex-direction:column;
    align-items:center;


}

img{
    
    width: 300px;
    height:200px;
    border-radius:5%;
    border: 2px solid #497174;
    box-shadow: 5px 10px 3px 3px black;
    margin-top:40px;
    margin-left:10px;
    
    
 
}

    

`;

