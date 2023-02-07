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
        
        > Indumentaria</h1>
            <div>
                <SeccionIndumentaria
                    indumentarias={indumentarias}
                    setState={setStateModal}
                    state={stateModal}
                />
                <Modals state={stateModal}>
                    <Contenido>
                        <button onClick={() => setStateModal(false)}>
                            Seguir comprando
                        </button>

                        <button onClick={() => setStateModal(false)}>
                            <Link
                             style={{
                                color: "#EB6440",
                            }}
                            to="/carrito" class="dropdown-item">
                                Ir al carrito
                            </Link>
                        </button>
                    </Contenido>
                </Modals>
            </div>
        </>
    );
}

const Contenido = styled.div`
    display: flex;
    flex-direction: row-reverse;

    button {
        display: flex;
        margin: 20px;
        padding: 3px;
        color: #eb6440;

       
    }
`;
