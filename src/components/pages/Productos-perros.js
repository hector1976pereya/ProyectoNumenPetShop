import "../../App.css";
import SeccionPerros from "../cards/perros/SeccionPerros";
import { useContext, useEffect, useState } from "react";
import { ReducerContext } from "../../context/ContextReducer";
import UpdateState from "../../updateState/UpdateState";
import Modals from "../modals/Modals";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function ProductosPerros() {
    const paqueteReducer = useContext(ReducerContext);
    const [state, dispatch] = paqueteReducer;
    const { productoDogs } = state;

    const [stateModal, setStateModal] = useState(false);

    //-------------Funcion inicial de carga de las tarjetas en la seccion perros---------------

    useEffect(() => {
        UpdateState(dispatch);
    }, []);

    //----------------------------------------------------------------- -----------------------

    return (
        <div>
            <SeccionPerros
                productoDogs={productoDogs}
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