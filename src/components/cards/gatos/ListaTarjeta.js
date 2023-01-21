import Tarjeta from "./Tarjeta"


const ListaTarjeta = (props) => {
    return (
      <div
       
         style={{
          display: "flex",
          flexWrap: "wrap",
          
         }}
      >
      {
        props.listaCats.map(objeto => <Tarjeta
         
          Key={objeto.id} objeto={objeto} />)
      }
      </div>
    )
  }
  
  export default ListaTarjeta
  