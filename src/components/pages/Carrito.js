import CartItem from "../cart/CartItem";
import { useContext } from "react";
import { ReducerContext } from "../../context/ContextReducer";
import UpdateState from "../../updateState/UpdateState";

import { useEffect } from "react";





export default function Carrito() {
    const paqueteReducer = useContext(ReducerContext);
    const [state, dispatch] = paqueteReducer;
    const {cart} = state;

    //------Actualizar estado---------------------------------------------

       useEffect(() => {
         
        UpdateState(dispatch);
        
       }, [])
       
  
        
   

   //--------------------------------------------------------------
    
   
 
    

    return (
        <>
            <div>
                {cart.map((objeto, index) => (
                    <CartItem Key={index} objeto={objeto} dispatch={dispatch} />
                ))}
               
               
            </div>
        </>
    );
}
