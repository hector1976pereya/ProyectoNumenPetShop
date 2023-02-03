
import axios from "axios";
import UpdateState from "../../updateState/UpdateState";



const AddToCart = async (objeto) => {
    console.log(objeto)

    const ENDPOINT = "http://localhost:5000/cart"
    
    const OPTIONS = {
        method: "POST",
        headers: { "content-type": "application/json" },
        data: JSON.stringify(objeto)
    };
    await axios(ENDPOINT, OPTIONS);
  

    UpdateState()

   
};

export default AddToCart;
