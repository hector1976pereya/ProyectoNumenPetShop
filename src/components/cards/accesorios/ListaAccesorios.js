

import TarjetaAccesorio from './TarjetaAccesorio'

const ListaAccesorios = (props) => {
  return (
    <div
       
         style={{
          display: "flex",
          flexWrap: "wrap",
          
         }}
      >
      {
        props.listaAccesorios.map(objeto => <TarjetaAccesorio
         
          Key={objeto.id} objeto={objeto} />)
      }
      </div>
  )
}

export default ListaAccesorios