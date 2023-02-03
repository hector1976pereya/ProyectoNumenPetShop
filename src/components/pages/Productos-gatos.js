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
            <h1>Sección gatos</h1>
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
                    ><Link to="/carrito" class="dropdown-item">
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
   
    margin:5px;
}

`;