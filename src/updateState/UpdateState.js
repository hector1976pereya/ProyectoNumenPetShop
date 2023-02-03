import axios from "axios";
import { TYPES } from "../action/shopAction";




const UpdateState = async (dispatch) => {

    const {READ_STATE}=TYPES

    const ENDPOINTS = {
        product:  "http://localhost:5000/productoCats",
        cart: "http://localhost:5000/cart",
    };

    const resProduct = await axios.get(ENDPOINTS.product);
    const resCart = await axios.get(ENDPOINTS.cart);

    const productListCat = resProduct.data;
    const cartItem = resCart.data;
  

    dispatch({
        type: READ_STATE,
        payload: {
            productListCat,
            cartItem,
        },
    });
};




export default UpdateState