import { createContext} from "react";
import { useReducer } from "react";
import shopReducer from "../reducer/shopReducer";
import { shopInitialState } from "../reducer/shopReducer";

export const ReducerContext = createContext();

const ContextReducer = (props) => {

    const [state, dispatch] = useReducer(shopReducer, shopInitialState);

    const paqueteReducer = [state, dispatch];

    

  

    return (
        <ReducerContext.Provider value={paqueteReducer}>
            {props.children}
        </ReducerContext.Provider>
    );
};

export default ContextReducer;
