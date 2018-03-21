import axios from "axios";

export function fetchProducts() {
    return function(dispatch) {
        dispatch({type: "FETCH_PRODUCTS"});
        axios.get("/products.json")
        .then((response) => {
            dispatch({type: "FETCH_PRODUCTS_FULFILLED", payload: response.data})
        })
        .catch((err) => {
            dispatch({type: "FETCH_PRODUCTS_REJECTED", payload: err})
        })
    }
}