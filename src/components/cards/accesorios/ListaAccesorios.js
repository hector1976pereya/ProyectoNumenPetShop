

import TarjetaAccesorio from './TarjetaAccesorio'

const ListaAccesorios = ({accesorios, setState, state}) => {
  return (
    <div
       
         style={{
          display: "flex",
          flexWrap: "wrap",
          
         }}
      >
      {
        accesorios.map(objeto => <TarjetaAccesorio
         
          Key={objeto.id} 
          objeto={objeto}
          setState={setState}
          state={state} />)
      }
      </div>
  )
}

export default ListaAccesorios