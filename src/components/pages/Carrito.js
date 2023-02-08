import CartItem from "../cart/CartItem";
import { useContext } from "react";
import { ReducerContext } from "../../context/ContextReducer";
import UpdateState from "../../updateState/UpdateState";

import { useEffect } from "react";
import styled from "styled-components";

export default function Carrito() {
    const paqueteReducer = useContext(ReducerContext);
    const [state, dispatch] = paqueteReducer;
    const { cart } = state;

    //------Actualizar estado---------------------------------------------

    useEffect(() => {
        UpdateState(dispatch);
    }, []);

    //--------------------------------------------------------------

    return (
        <>
            <h1
                style={{
                    border: "2px solid black",
                    marginTop: "20px",
                    textAlign: "center",
                    color: "#497174",
                    textShadow: "1px 1px 2px black",
                    background: "#ffffff",
                    marginLeft: "10px",
                    marginRight: "10px",
                }}
            >
                Carrito de compras
            </h1>

            {cart.length === 0 && (
                    <h2
                        style={{
                            textAlign: "center",
                            color: "#EB6440",
                            textShadow: "1px 1px 2px black",
                            marginTop: "150px",
                            marginBottom: "150px",
                        }}
                    >
                        Tu carro esta vacio
                    </h2>
                )}


            <div
             style={{
                display: "flex",
                flexWrap: "wrap",
                
               }}
            >
                
                {cart.length !== 0 &&
                    cart.map((objeto, index) => (
                        <CartItem
                            Key={index}
                            objeto={objeto}
                            dispatch={dispatch}
                        />
                    ))}

              
            </div>
            {cart.length !== 0 && (
                    <ContenedorButton>
                        <button>Comprar</button>
                    </ContenedorButton>
                )}
        </>
    );
}

const ContenedorButton = styled.div`
    display: flex;
    justify-content: center;
    button {
        display: flex;
        margin: 10px;

        padding-left: 20px;
        padding-right: 20px;
        color: #eb6440;
        border-radius: 30px;
        border: 1px solid #497174;
        transition: all 0.2s;

        box-shadow: -3px 1px 1px 2px #497174;
    }
`;
