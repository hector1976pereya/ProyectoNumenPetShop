import TarjetaPerro from "./TarjetaPerro"







const ListaTarjetaPerro = ({productoDogs, setState, state}) => {
  return (
    <div
       
         style={{
          display: "flex",
          flexWrap: "wrap",
          
         }}
      >
      {
        productoDogs.map(objeto => <TarjetaPerro
         
          Key={objeto.id} 
          objeto={objeto} 
          setState={setState}
          state={state}
          />)
      }
      </div>
  )
}

export default ListaTarjetaPerro