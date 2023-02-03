import TarjetaIndumentaria from "./TarjetaIndumentaria"






const ListaTarjetaIndumentaria = ({indumentarias, setState, state}) => {
  return (
    <div
       
         style={{
          display: "flex",
          flexWrap: "wrap",
          
         }}
      >
      {
        indumentarias.map(objeto => <TarjetaIndumentaria
         
          Key={objeto.id} 
          objeto={objeto} 
          setState={setState}
          state={state}
          />)
      }
      </div>
  )
}

export default ListaTarjetaIndumentaria