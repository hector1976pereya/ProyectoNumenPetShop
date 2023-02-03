import { TYPES } from "../action/shopAction";
const { READ_STATE, CLEAR_CART } = TYPES;

export const shopInitialState = {
    productoDogs: [],
    indumentarias: [],
    accesorios: [],
    productoCats: [],
    cart: []
};

const shopReducer = (state, action) => {
    
    switch (action.type) {
        case READ_STATE: {
            return {
                ...state,
                productoCats: action.payload.productListCat,
                cart: action.payload.cartItem,
            };
        }

        case CLEAR_CART: {
        }

        default:
            return state;
    }
};

export default shopReducer;
