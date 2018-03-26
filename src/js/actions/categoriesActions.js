import axios from "axios"

export function fetchCategories() {
    return function(dispatch) {
        dispatch({type: "categories/FETCH_CATEGORIES"});
        axios.get("/categories.json")
        .then((response) => {
            dispatch({type: "categories/FETCH_CATEGORIES_FULFILLED", payload: response.data})
        })
        .catch((err) => {
            dispatch({type: "categories/FETCH_CATEGORIES_REJECTED", payload: err})
        })
    }
}