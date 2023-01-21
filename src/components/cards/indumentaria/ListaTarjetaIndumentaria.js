import TarjetaIndumentaria from "./TarjetaIndumentaria"






const ListaTarjetaIndumentaria = (props) => {
  return (
    <div
       
         style={{
          display: "flex",
          flexWrap: "wrap",
          
         }}
      >
      {
        props.listaIndumentaria.map(objeto => <TarjetaIndumentaria
         
          Key={objeto.id} objeto={objeto} />)
      }
      </div>
  )
}

export default ListaTarjetaIndumentaria