import AddToCart from "../../../action/functionAction/AddToCart";






const Tarjeta = ({objeto, setState,state}) => {
    
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
                    ${objeto.precio} 
                </p>
            </figcaption>
            
           
            <button
                 onClick={() => {

                    AddToCart(objeto)
                    setState(!state)

                 }
                    
                   
                  
                
                }
                 
                 
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
                    cursor:"pointer",
                }}
            >
                AÑADIR COMPRA AL CARRITO
            </button>
        </figure>
    );
};

export default Tarjeta;
