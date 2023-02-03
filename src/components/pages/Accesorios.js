import SeccionAccesorios from "../cards/accesorios/SeccionAccesorios";
import { useContext, useState, useEffect } from "react";
import { ReducerContext } from "../../context/ContextReducer";
import Modals from "../modals/Modals";
import styled from "styled-components";
import UpdateState from "../../updateState/UpdateState";
import { Link } from "react-router-dom";

export default function Accesorios() {
    const paqueteReducer = useContext(ReducerContext);
    const [state, dispatch] = paqueteReducer;
    const { accesorios } = state;

    const [stateModal, setStateModal] = useState(false);

    //-------------Funcion inicial de carga de las tarjetas en la seccion accesorios---------------

    useEffect(() => {
        UpdateState(dispatch);
    }, []);

    //----------------------------------------------------------------- -----------------------

    return (
        <div>
            <SeccionAccesorios
                accesorios={accesorios}
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
