import axios from "axios";
import { TYPES } from "../action/shopAction";




const UpdateState = async (dispatch) => {

    const {READ_STATE}=TYPES

    const ENDPOINTS = {
        productClothing:"http://localhost:5000/indumentarias",
        productAcces:"http://localhost:5000/accesorios",
        productDog: " http://localhost:5000/productoDogs",
        productCat:  "http://localhost:5000/productoCats",
        cart: "http://localhost:5000/cart",
    };
    const resProductClouthing= await axios.get(ENDPOINTS.productClothing);
    const resProductAcces= await axios.get(ENDPOINTS.productAcces);
    const resProductDog = await axios.get(ENDPOINTS.productDog);
    const resProductCat = await axios.get(ENDPOINTS.productCat);
    const resCart = await axios.get(ENDPOINTS.cart);

    const productListClouthing = resProductClouthing.data;
    const productListDog = resProductDog.data;
    const productListAcces = resProductAcces.data;
    const productListCat = resProductCat.data;
    const cartItem = resCart.data;
  

    dispatch({
        type: READ_STATE,
        payload: {
            productListDog,
            productListClouthing,
            productListAcces,
            productListCat,
            cartItem,
        },
    });
};




export default UpdateState