import axios from "axios"

export function fetchProducts() {
    return function(dispatch) {
        dispatch({type: "products/FETCH_PRODUCTS"});
        axios.get("/products.json")
        .then((response) => {
            dispatch({type: "products/FETCH_PRODUCTS_FULFILLED", payload: response.data})
        })
        .catch((err) => {
            dispatch({type: "products/FETCH_PRODUCTS_REJECTED", payload: err})
        })
    }
}

export function filterProductByCategory(categoryid, products) {
    const categoriesFiltered = products.map(p => p.categories.filter(c => c.id == categoryid));
    const productsFiltered = products.filter((p, i) => categoriesFiltered[i].length > 0);
    return {
        type: "products/FETCH_PRODUCTS_CATEGORY",
        productsCategory: productsFiltered,
    };
};

export function fetchProductsFilter(selectCategories, products) {
    const categoriesFiltered = products.map(p => p.categories.filter(c => selectCategories.indexOf(c.id) >= 0));
    console.log(categoriesFiltered);
    const productsFiltered = products.filter((p, i) => categoriesFiltered[i].length > 0);
    console.log(productsFiltered);
    return {
        type: "products/FETCH_PRODUCTS_FILTER",
        productsFilter: productsFiltered,
        selectCategories
    }
};