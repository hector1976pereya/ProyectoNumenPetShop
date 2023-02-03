import UpdateState from "../../updateState/UpdateState";
import axios from "axios";
import Select from "react-select";
import { useState } from "react";

const cantidades = [
   
    {
        label: "2 unidades",
        value: 2,
    },
    {
        label: "3 unidades",
        value: 3,
    },
];




 







const CartItem = ({objeto, dispatch}) => {

const [state, setState] = useState(1)

const stateOption=(event)=>{

setState(event.value)

}
    

    //----------Función para eliminar producto------------------------------

    const deleteFromCart = async (objeto) => {
        const ENDPOINT = `http://localhost:5000/cart/${objeto.id}`;

        const OPTIONS = {
            method: "DELETE",
            headers: { "content-type": "application/json" },
        };
        await axios(ENDPOINT, OPTIONS);

        UpdateState(dispatch)
    };

   


    //---------------------------------------------------------------------
    return (
        <figure
            style={{
                border: "2px solid black",
                padding: "25px",
                width: "300px",
                height: "450px",
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
                borderRadius: "10px",
                boxShadow: "5px 5px 5px",
                margin: "70px",
                background: "#EFF5F5",
            }}
        >
            <img src={objeto.img} alt="" />
            <figcaption>
                <h3
                    style={{
                        display: "inline-block",
                        fontFamily: "Monserrat",
                        fontSize: "14px",
                        lineHeight: "1.5",
                        color: "#497174",
                    }}
                >
                    {objeto.producto}
                </h3>
                <p
                    style={{
                        color: "#497174",
                        fontFamily: "Monserrat",
                    }}
                >
                    {" "}
                    ${objeto.precio * state}
                </p>
            </figcaption>
            <Select
              defaultValue={{label:" 1 unidad", value:1}}
              options={cantidades}
              onChange={stateOption}
            
            />
            <button
                onClick={() => deleteFromCart(objeto)}
                style={{
                    backgroundColor: "#EB6440",
                    color: "white",
                    border: "none",
                    borderRadius: "8px",
                    padding: "5px 20px",
                    fontsize: "3rem",
                    fontStyle: "bold",
                    fontFamily: "Monserrat",
                    display: "flex",
                    textAlign: "center",
                }}
            >
                Eliminar este producto del carrito
            </button>
        </figure>
    );
};

export default CartItem;
