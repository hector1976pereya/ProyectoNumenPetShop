import React from "react";
import "../../App.css";
import SeccionIndumentaria from "../cards/indumentaria/SeccionIndumentaria";
import { useContext, useState, useEffect } from "react";
import { ReducerContext } from "../../context/ContextReducer";
import Modals from "../modals/Modals";
import { Link } from "react-router-dom";
import styled from "styled-components";
import UpdateState from "../../updateState/UpdateState";

export default function Indumentaria() {
    
    const paqueteReducer = useContext(ReducerContext);
    const [state, dispatch] = paqueteReducer;
    const { indumentarias } = state;

    const [stateModal, setStateModal] = useState(false);

    //--------------------------------------------------------
    useEffect(() => {
        UpdateState(dispatch);
    }, []);

    //--------------------------------------------------------

    return (
        <div>
            <SeccionIndumentaria
                indumentarias={indumentarias}
                setState={setStateModal}
                state={stateModal}
            />
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
        </div>
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
