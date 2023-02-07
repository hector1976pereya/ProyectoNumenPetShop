import Seccion from "../cards/gatos/Seccion";
import { useContext } from "react";
import { ReducerContext } from "../../context/ContextReducer";
import { useEffect } from "react";
import UpdateState from "../../updateState/UpdateState";
import Modals from "../modals/Modals";
import styled from "styled-components";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function ProductosGatos() {
    const paqueteReducer = useContext(ReducerContext);
    const [state, dispatch] = paqueteReducer;
    const { productoCats } = state;


    const [stateModal, setStateModal] = useState(false);


    //-------------Funcion inicial de carga de las tarjetas en la seccion gatos---------------

    useEffect(() => {
        UpdateState(dispatch);
    }, []);

    //----------------------------------------------------------------- -----------------------

    return (
        <>
            <h1
            style={{
                border: "2px solid black",
                marginTop:"20px",
               textAlign:"center",
               color:"#497174",
               textShadow: "1px 1px 2px black",
               background: "#ffffff",
               marginLeft:"10px",
               marginRight:"10px",
              
              }}
            >Gatos</h1>
            <Seccion
             productoCats={productoCats} 
             setState={setStateModal}
              state={stateModal}

             />;

            <Modals
            state={stateModal}
            
            >
                <Contenido>
                    
                    <button
                    onClick={()=>setStateModal(false)}
                    >Seguir comprando</button>
                   
                    <button
                    onClick={()=>setStateModal(false)}
                    ><Link 
                    style={{
                        color: "#EB6440",
                    }}
                    
                    to="/carrito" class="dropdown-item">
                    Ir al carrito
                </Link></button>
                    
                    
                </Contenido>
            </Modals>
        </>
    );
}

const Contenido= styled.div`

display: flex;
flex-direction:row-reverse;

button {
    display: flex;
    margin:20px;
    padding:3px;
    color:#EB6440
    
}

`;