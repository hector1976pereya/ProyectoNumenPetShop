import TarjetaPerro from "./TarjetaPerro"







const ListaTarjetaPerro = (props) => {
  return (
    <div
       
         style={{
          display: "flex",
          flexWrap: "wrap",
          
         }}
      >
      {
        props.listaDogs.map(objeto => <TarjetaPerro
         
          Key={objeto.id} objeto={objeto} />)
      }
      </div>
  )
}

export default ListaTarjetaPerro