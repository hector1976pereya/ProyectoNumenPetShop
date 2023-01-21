import "../../App.css";
import SeccionPerros from "../cards/perros/SeccionPerros";

const listaDogs =[

  {
    id: 1,
    producto: "EUKANUBA PERRO ADULTO X 20 KG",
    precio: "4.030",
    img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/145/238/products/adulto-raza-mediana21-03524fa04b33d8d1ed16357022062093-480-0.webp"
  },
  {
    id: 2,
    producto: "PEDIGREE PERRO ADULTO X 21KG",
    precio: "7.430",
    img: "https://catycanar.vtexassets.com/arquivos/ids/167311-800-auto?v=638071566721400000&width=800&height=auto&aspect=true"
  },
  {
    id: 3,
    producto: "KUME PERRO ADULTO X 3KG",
    precio: "4.390",
    img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/145/238/products/perro-kume-mordida-standar1-d36bde0d155c0f195a15950411509766-640-01-680428e9e537b5a27616351702109849-1024-1024.webp"
  },
  {
    id: 4,
    producto: "AGILITY ADULTOS X 3KG",
    precio: "3.770",
    img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/145/238/products/agility-adumed-600x6781-5b19b6fe1891f3f54216059125072555-1024-1024.webp"
  },
  {
    id: 5,
    producto: "VITALCAN COMPLETE ADULTOS X 3KG",
    precio: "5.000",
    img: "https://s.lamason.us/petshopmdq.com/media/2020/11/29105009/VC-COMPLETE-PERRO-MYG-ADULTO2.jpg"
  },
  {
    id: 6,
    producto: "ROYAL CANIN PUPPY X 10KG",
    precio: "4.000",
    img: "https://puppis.vteximg.com.br/arquivos/ids/167003-1000-1000/Royal-Canin-Puppy-Medium.jpg?v=636965493339970000"
  },
  {
    id: 7,
    producto: "ROYAL CANIN JUNIOR X 15KG",
    precio: "4.770",
    img: "https://traviesospetshop.com.ar/wp-content/uploads/2022/04/royal-performance-junior-x-2und.png"
  },
  {
    id: 8,
    producto: "OPTIMUM CACHORROS X 3KG",
    precio: "5.770",
    img: "https://nordenpet.com.ar/wp-content/uploads/2021/02/Optimum-Perro-Cachorro-Raza-Pequena.jpg"
  },
  {
    id: 9,
    producto: "PROPLAN PUPPY X 3KG",
    precio: "3.870",
    img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/145/238/products/cachorro-raza-grande1-af2dbde3676ee6617016051173083360-480-0.webp"
  },
  {
    id: 10,
    producto: "ROYAL CANIN JUNIOR X 10KG",
    precio: "3.970",
    img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQq1BeIjmSraR8Fq8gs-HJC6CVnhxgGOPJjUeeUq0S85lf27yn_QICM6ckZ2U3XsfTENzmB_7VEbCumlmUh0W7yx1uqWJN7g7qc5v2LV7TnK0G4GO5SSjZWEA"
  }]
 




export default function ProductosPerros() {
 
    return(

      <div>

         <SeccionPerros listaDogs={listaDogs} />
      </div>

      
    )
     
}
