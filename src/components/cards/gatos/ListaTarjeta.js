import Tarjeta from "./Tarjeta"


const ListaTarjeta = ({productoCats, setState, state}) => {
    return (
      <div
       
         style={{
          display: "flex",
          flexWrap: "wrap",
          
         }}
      >
      {
        productoCats.map(objeto => <Tarjeta
         
          Key={objeto.id}
           objeto={objeto} 
           setState={setState}
           state={state}/>)
      }
      </div>
    )
  }
  
  export default ListaTarjeta
  