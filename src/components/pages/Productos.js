import { Link } from "react-router-dom";

import "./productos.css";


export default function Productos() {
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

>Productos</h1>
         
         <div className="cardContainer">         
         {/* Tarjeta productos perros */}
          <div className="card">
            <Link to="/perros">
              <img className="productosImg" src={"https://cdn11.bigcommerce.com/s-lmdkge2gql/images/stencil/original/image-manager/dog.jpg?t=1672739290"} alt="perros" />                   <p className='productosP'>Productos para tu perro</p>
              <button className='productosBtn'>Perros</button>
            </Link>
          </div>

          {/* Tarjeta productos gatos */}
          <div className="card">
            <Link to="/gatos">
              <img className="productosImg" src={"https://cdn11.bigcommerce.com/s-lmdkge2gql/images/stencil/original/image-manager/cat.jpg?t=1672739307"} alt="gatos" />
              <p className='productosP'>Productos para tu gato</p>
              <button className='productosBtn'>Gatos</button>
            </Link>  
          </div>

          {/* Tarjeta productos accesorios */}
          <div className="card">
            <Link to="/accesorios">
              <img className="productosImg" src={"https://www.purina.co.uk/sites/default/files/2020-12/Garden%20Dog%20ToysHERO.jpg"} alt="accesorios" />
              <p className='productosP'>Accesorios para tu mascota</p>
              <button className='productosBtn'>Accesorios</button>
            </Link>
          </div> 

          {/* Tarjeta productos indumentaria */}
          <div className="card">
            <Link to="/Indumentaria">
              <img className="productosImg" src={"https://www.petplace.com/static/9ff79c78a5d90ba3b746dfd8d5bce45c/ac7fd/shutterstock_113884636.png"} alt="indumentaria" />
              <p className='productosP'>Indumentaria para tu mascota</p>
              <button className='productosBtn'>Indumentaria</button>
            </Link>
          </div>   
    </div>

        </>
    );
}
