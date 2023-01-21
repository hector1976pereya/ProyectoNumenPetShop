import Seccion from "../cards/gatos/Seccion";

const listaCats = [
    {
        id: 21,
        producto: "ROYAL CANIN GATOS X 15KG",
        precio: "5.000",
        img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/145/238/products/screenshot_61-c042b5a512bdefa5ea16678599846932-480-0.webp",
    },
    {
        id: 22,
        producto: "VITALCAN GATOS X 7,5KG",
        precio: "4.770",
        img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/145/238/products/kitten-frente-x751-e9502baf1d46f40ac916485718570775-480-0.webp",
    },
    {
        id: 23,
        producto: "KUMEGATOS ADULT TODAS LAS EDADES X 1,5KG",
        precio: "4.870",
        img: "https://hollywoodpetshop.com.ar/wp-content/uploads/2021/03/packs-producto-gato-300x300.png",
    },
    {
        id: 24,
        producto: "VITALCAN COMPLETE ADULT X 15KG",
        precio: "5.000",
        img: "https://hollywoodpetshop.com.ar/wp-content/uploads/2021/06/Complete-Gato-Adulto-1.5-y-15-Kg-300x300.jpg",
    },
    {
        id: 25,
        producto: "INFINITY GATOS X 10KG",
        precio: "6.370",
        img: "https://hollywoodpetshop.com.ar/wp-content/uploads/2022/04/INFINITY-GATO-x-10kg-300x300.jpg",
    },
    {
        id: 26,
        producto: "NUTRIQUE BABY CAT & KITTEN X 7,5KG",
        precio: "7.500",
        img: "https://hollywoodpetshop.com.ar/wp-content/uploads/2019/07/baby-cat-kitten-300x300.png",
    },
];

export default function ProductosGatos() {
    return <Seccion listaCats={listaCats} />;
}
