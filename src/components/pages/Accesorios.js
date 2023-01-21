import SeccionAccesorios from "../cards/accesorios/SeccionAccesorios";

const listaAccesorios=[
  {
    id: 16,
    producto: "RUEDITAS DE GOMA PARA PERROS",
    precio: "2.770",
    img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/145/238/products/ruedita-cancat1-125edbda75f1407ae415875854189967-480-0.webp"
  },
  {
    id: 17,
    producto: "CUERDAS PARA PERROS",
    precio: "2.770",
    img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/145/238/products/soga-2-nudos-16-soga-de-tela-con-nudo1-a0db0eb1fdc55c424316445924756769-480-0.webp"
  },
  {
    id: 18,
    producto: "PELOTAS PARA PERROS",
    precio: "770",
    img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/145/238/products/pelota-con-chifle1-b7ee0a3cd0091655b215975062822848-480-0.webp"
  },
  {
    id: 19,
    producto: "PELOTAS PORTA COMIDA PARA PERROS",
    precio: "770",
    img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/145/238/products/squiki1-68154822edf24226aa16202475984010-480-0.webp"
  },
  {
    id: 20,
    producto: "HUESITOS LIMIADIENTES CON POLLO PARA PERROS",
    precio: "1.500",
    img: "https://cat-oh.com/wp-content/uploads/2020/05/4564-Gweb-2048x2041.jpg"
  }
]




export default function Accesorios() {
 return <SeccionAccesorios listaAccesorios={listaAccesorios}/>
}